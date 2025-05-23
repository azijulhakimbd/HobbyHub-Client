import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

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
              setGroups((prevGroups) => prevGroups.filter((group) => group._id !== _id));
            }
          });
      }
    });
  };

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">My Groups</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border dark:border-gray-700 shadow-md rounded">
          <thead className="bg-gray-100 dark:bg-gray-800 text-left">
            <tr className="text-gray-800 dark:text-gray-200">
              <th className="p-3 border dark:border-gray-700">#</th>
              <th className="p-3 border dark:border-gray-700">Group Name</th>
              <th className="p-3 border dark:border-gray-700">Category</th>
              <th className="p-3 border dark:border-gray-700">Location</th>
              <th className="p-3 border dark:border-gray-700">Max Members</th>
              <th className="p-3 border dark:border-gray-700">Start Date</th>
              <th className="p-3 border dark:border-gray-700">Created</th>
              <th className="p-3 border dark:border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <tr key={group._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                  <td className="p-3 border dark:border-gray-700">{index + 1}</td>
                  <td className="p-3 border dark:border-gray-700">{group.groupName}</td>
                  <td className="p-3 border dark:border-gray-700">{group.category}</td>
                  <td className="p-3 border dark:border-gray-700">{group.location}</td>
                  <td className="p-3 border dark:border-gray-700">{group.maxMembers}</td>
                  <td className="p-3 border dark:border-gray-700">{group.startDate}</td>
                  <td className="p-3 border dark:border-gray-700">
                    {new Date(group.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 border dark:border-gray-700 space-x-2">
                    <Link to={`/updateGroup/${group._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-4 text-center text-gray-500 dark:text-gray-400">
                  You have no groups.{" "}
                  <Link to="/createGroup" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-500">
                    Create one?
                  </Link>
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
