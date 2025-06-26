import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
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

    newGroup.userName = user?.displayName || "Anonymous";
    newGroup.userEmail = user?.email || "unknown@email.com";
    newGroup.createdAt = new Date().toISOString();

    fetch("https://b11-a10-papaya-server.vercel.app/groups/", {
      method: "POST",
      headers: { "content-type": "application/json" },
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
    <div className="min-h-screen bg-base-200 text-base-content py-10 px-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create Group</title>
        <link rel="canonical" href="https://b11-a10-papiya.netlify.app/creategroup" />
      </Helmet>

      <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Create a Hobby Group</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            className="input input-bordered w-full"
            required
          />

          <select name="category" className="select select-bordered w-full" required>
            <option value="">Select Hobby Category</option>
            {hobbyCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>

          <input
            type="text"
            name="location"
            placeholder="Meeting Location"
            className="input input-bordered w-full"
            required
          />

          <input
            type="number"
            name="maxMembers"
            placeholder="Max Members"
            className="input input-bordered w-full"
            required
          />

          <input
            type="date"
            name="startDate"
            className="input input-bordered w-full"
            required
          />

          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />

          {/* Read-only User Info */}
          <input
            type="text"
            value={user?.displayName || "Anonymous"}
            readOnly
            className="input input-disabled w-full"
          />

          <input
            type="email"
            value={user?.email || "unknown@email.com"}
            readOnly
            className="input input-disabled w-full"
          />

          <button type="submit" className="btn btn-primary w-full mt-4">
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
