import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const MyGroups = () => {
  const { user } = use(AuthContext);
  const currentUserEmail=user.email;
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch("http://localhost:3000/groups");
        const data = await res.json();

        // Filter groups by the logged-in user's email
        const myGroups = data.filter(
          (group) => group.userEmail === currentUserEmail
        );
        setGroups(myGroups);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this group?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`http://localhost:3000/groups/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setGroups((prev) => prev.filter((group) => group._id !== id));
        toast.success("Group deleted successfully!");
      } else {
        toast.warning("Failed to delete the group.");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateGroup/${id}`);
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
                    <button
                      onClick={() => handleUpdate(group._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
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
