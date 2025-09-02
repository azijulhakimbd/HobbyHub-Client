import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
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
    startDate, 
  } = useLoaderData();

  const handleGroupJoin = () => {
    toast.success("Group Joined Successfully!");
  };

  // ✅ Check deadline
  const isDeadlineOver = new Date() > new Date(startDate);

  return (
    <div className="min-h-screen bg-base-100 py-25 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl text-center font-bold text-primary mb-10">
        Group Details
      </h1>

      <div className="card lg:card-side bg-base-200 shadow-xl">
        {/* Image Section */}
        <figure className="w-full lg:w-1/2 p-6">
          <img
            src={imageUrl}
            alt={groupName}
            className="rounded-2xl object-cover w-full h-full max-h-[400px]"
          />
        </figure>

        {/* Details Section */}
        <div className="card-body w-full lg:w-1/2 text-base-content space-y-3">
          <h2 className="card-title text-2xl sm:text-3xl text-secondary">
            {groupName}
          </h2>

          <div className="grid gap-1 text-sm sm:text-base">
            <p className="text-justify text-lg">{description}</p>
            <p>
              <span className="font-semibold text-lg">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold text-lg">Max Members:</span> {maxMembers}
            </p>
            <p>
              <span className="font-semibold text-lg">Group By:</span> {userName}
            </p>
            <p>
              <span className="font-semibold text-lg">Date:</span> {startDate}
            </p>
          </div>

          <div className="flex items-center gap-2 text-lg">
            <IoLocationOutline className="text-lg" />
            <span>{location}</span>
          </div>

          {/* Join Button / Deadline Message */}
          <div className="card-actions justify-start mt-4">
            {isDeadlineOver ? (
              <div className="text-error font-semibold text-lg">
                ⚠️ Deadline Over
              </div>
            ) : (
              <button
                onClick={handleGroupJoin}
                className="btn btn-primary w-full md:w-1/2"
              >
                Join Group
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetailsPage;
