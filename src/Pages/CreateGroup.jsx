import React, { use, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
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
  const { user } = use(AuthContext); // Assuming user contains name and email
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    groupName: "",
    category: "",
    description: "",
    location: "",
    maxMembers: "",
    startDate: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGroup = {
      ...formData,
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email || "unknown@email.com",
      createdAt: new Date().toISOString(),
    };

    // Here you'd send the group data to your database or backend
    console.log("Group Created:", newGroup);

    toast.success("Group created successfully!");
    navigate("/"); 
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Create a Hobby Group
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          className="w-full px-4 py-2 border rounded"
          value={formData.groupName}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          className="w-full px-4 py-2 border rounded"
          value={formData.category}
          onChange={handleChange}
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
          className="w-full px-4 py-2 border rounded"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="text"
          name="location"
          placeholder="Meeting Location"
          className="w-full px-4 py-2 border rounded"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="maxMembers"
          placeholder="Max Members"
          className="w-full px-4 py-2 border rounded"
          value={formData.maxMembers}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="startDate"
          className="w-full px-4 py-2 border rounded"
          value={formData.startDate}
          onChange={handleChange}
          required
        />

        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          className="w-full px-4 py-2 border rounded"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />

        {/* Read-only user info */}
        <input
          type="text"
          value={user?.displayName || "Anonymous"}
          className="w-full px-4 py-2 border rounded bg-gray-100"
          readOnly
        />

        <input
          type="email"
          value={user?.email || "unknown@email.com"}
          className="w-full px-4 py-2 border rounded bg-gray-100"
          readOnly
        />

        <button
          type="submit"
          className="w-full bg-blue-400 text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
