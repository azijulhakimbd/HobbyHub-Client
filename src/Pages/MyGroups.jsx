import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const initialGroups = useLoaderData();
  const [groups, setGroups] = useState(initialGroups);
  const currentUserEmail = user.email;

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch("http://localhost:3000/groups");
        const data = await res.json();
        const myGroups = data.filter(
          (group) => group.userEmail === currentUserEmail
        );
        setGroups(myGroups);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups();
  }, [currentUserEmail]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
              setGroups((prevGroups) =>
                prevGroups.filter((group) => group._id !== _id)
              );
            }
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Groups</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border shadow-md rounded">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">Group Name</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Location</th>
              <th className="p-3 border">Max Members</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">Created</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <tr key={group._id} className="hover:bg-gray-50">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{group.groupName}</td>
                  <td className="p-3 border">{group.category}</td>
                  <td className="p-3 border">{group.location}</td>
                  <td className="p-3 border">{group.maxMembers}</td>
                  <td className="p-3 border">{group.startDate}</td>
                  <td className="p-3 border">
                    {new Date(group.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 border space-x-2">
                    <Link to={`/updateGroup/${group._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-4 text-center text-gray-500">
                  No groups found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
