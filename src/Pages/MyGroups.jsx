import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet";

const MyGroups = () => {
  const [groups, setGroups] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch("https://b11-a10-papaya-server.vercel.app/groups")
        .then((res) => res.json())
        .then((data) => {
          const myGroups = data.filter((group) => group.userEmail === user.email);
          setGroups(myGroups);
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b11-a10-papaya-server.vercel.app/groups/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your group has been deleted.", "success");
              setGroups((prev) => prev.filter((g) => g._id !== _id));
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen p-6 bg-base-200 text-base-content transition-colors duration-300">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Groups</title>
        <link rel="canonical" href="https://b11-a10-papiya.netlify.app/mygroups" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">My Created Groups</h2>

        <div className="overflow-x-auto rounded-xl shadow">
          <table className="table table-zebra w-full">
            <thead className="bg-base-300 text-base-content">
              <tr>
                <th>#</th>
                <th>Group Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Max Members</th>
                <th>Start Date</th>
                <th>Created</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {groups.length > 0 ? (
                groups.map((group, index) => (
                  <tr key={group._id}>
                    <td>{index + 1}</td>
                    <td>{group.groupName}</td>
                    <td>{group.category}</td>
                    <td>{group.location}</td>
                    <td>{group.maxMembers}</td>
                    <td>{group.startDate}</td>
                    <td>{new Date(group.createdAt).toLocaleDateString()}</td>
                    <td className="flex gap-2 justify-center">
                      <Link to={`/updateGroup/${group._id}`}>
                        <button className="btn btn-sm btn-info text-white">Update</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="btn btn-sm btn-error text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-gray-500 py-6">
                    You have no groups.{" "}
                    <Link
                      to="/createGroup"
                      className="link text-primary underline"
                    >
                      Create one?
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGroups;
