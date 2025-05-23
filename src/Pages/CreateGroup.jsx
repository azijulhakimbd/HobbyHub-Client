import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

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

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDataObj = new FormData(form);
    const newGroup = Object.fromEntries(formDataObj.entries());

    // Append user info and timestamp
    newGroup.userName = user?.displayName || "Anonymous";
    newGroup.userEmail = user?.email || "unknown@email.com";
    newGroup.createdAt = new Date().toISOString();

    // Submit to backend or DB
    fetch("https://b11-a10-papaya-server.vercel.app/groups/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Group created successfully!");
          navigate("/");
          form.reset();
        }
      });
  };

  return (
   <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-10">
    <Helmet>
          <meta charSet="utf-8" />
          <title>Create Group</title>
          <link rel="canonical" href="https://b11-a10-papiya.netlify.app/creategroup" />
        </Helmet>
  <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
    Create a Hobby Group
  </h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      name="groupName"
      placeholder="Group Name"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    <select
      name="category"
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
      rows="4"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    ></textarea>

    <input
      type="text"
      name="location"
      placeholder="Meeting Location"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    <input
      type="number"
      name="maxMembers"
      placeholder="Max Members"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    <input
      type="date"
      name="startDate"
      className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      required
    />

    <input
      type="url"
      name="imageUrl"
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
      Create Group
    </button>
  </form>
</div>
  );
};

export default CreateGroup;
