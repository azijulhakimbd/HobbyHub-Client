import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const GroupDetailsPage = () => {
  const {
    _id,
    groupName,
    imageUrl,
    description,
    location,
    userName,
    category,
    maxMembers,
  } = useLoaderData();

  const handleGroupJoin = () => {
    toast.success(" Group Joined Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl text-center font-bold text-indigo-700 mb-10">
        Group Details
      </h1>

      <div className="bg-white shadow-xl rounded-3xl flex flex-col lg:flex-row gap-10 p-6 md:p-10">
        {/* Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={imageUrl}
            alt="Group"
            className="w-full max-h-[400px] object-cover rounded-2xl border border-[#efefef]"
          />
        </div>

        {/* Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5 text-gray-700">
          <h2 className="text-5xl font-semibold text-indigo-600 text-center lg:text-left">
            {groupName}
          </h2>

          <p className="text-lg">{description}</p>

          <div className="space-y-1">
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Max Members:</strong> {maxMembers}
            </p>
            <p>
              <strong>Group by:</strong> {userName}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
            <IoLocationOutline className="text-xl" />
            <span className="text-md sm:text-lg">{location}</span>
          </div>

          <button
            onClick={handleGroupJoin}
            className="mt-4 w-full md:w-1/2 self-center lg:self-start bg-indigo-600 text-white py-2 px-6 rounded-xl hover:bg-indigo-700 transition duration-300"
          >
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupDetailsPage;
