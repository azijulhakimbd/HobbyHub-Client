import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";

const UpdateGroup = () => {
  const { user } = use(AuthContext);
  const {
    _id,
    groupName,
    category,
    description,
    maxMembers,
    startDate,
    imageUrl,
    location,
  } = useLoaderData();
  const hobbyCategories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());
    // send updated Group to DB
    fetch(`https://b11-a10-papaya-server.vercel.app/groups/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "group Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-10">
  <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
    Update a Hobby Group
  </h2>
  <form onSubmit={handleUpdateSubmit} className="space-y-4">
    <input
      type="text"
      name="groupName"
      defaultValue={groupName}
      placeholder="Group Name"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    <select
      name="category"
      defaultValue={category}
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    >
      <option value="">Select Hobby Category</option>
      {hobbyCategories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>

    <textarea
      name="description"
      placeholder="Description"
      defaultValue={description}
      rows="4"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    ></textarea>

    <input
      type="text"
      name="location"
      defaultValue={location}
      placeholder="Meeting Location"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    <input
      type="number"
      name="maxMembers"
      defaultValue={maxMembers}
      placeholder="Max Members"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    <input
      type="date"
      name="startDate"
      defaultValue={startDate}
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    <input
      type="url"
      name="imageUrl"
      defaultValue={imageUrl}
      placeholder="Image URL"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    {/* Read-only user info */}
    <input
      type="text"
      value={user?.displayName || "Anonymous"}
      className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
      readOnly
    />

    <input
      type="email"
      value={user?.email || "unknown@email.com"}
      className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
      readOnly
    />

    <button
      type="submit"
      className="w-full bg-blue-400 hover:bg-gray-800 text-white py-2 px-4 rounded
                 dark:bg-blue-600 dark:hover:bg-blue-800"
    >
      Update Group
    </button>
  </form>
</div>

  );
};

export default UpdateGroup;
