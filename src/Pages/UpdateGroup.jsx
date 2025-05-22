import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const UpdateGroup = () => {
    const {user}=use(AuthContext);
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
    const handleUpdateSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const UpdateForm=formData.entries()
    }
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Create a Hobby Group
      </h2>
      <form onSubmit={handleUpdateSubmit} className="space-y-4">
        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          className="w-full px-4 py-2 border rounded"
          required
        />

        <select
          name="category"
          className="w-full px-4 py-2 border rounded"
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
          required
        ></textarea>

        <input
          type="text"
          name="location"
          placeholder="Meeting Location"
          className="w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="number"
          name="maxMembers"
          placeholder="Max Members"
          className="w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="date"
          name="startDate"
          className="w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          className="w-full px-4 py-2 border rounded"
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
          Update Group
        </button>
      </form>
    </div>
    );
};

export default UpdateGroup;