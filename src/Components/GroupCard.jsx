import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const GroupCard = ({ group }) => {
  const { _id, groupName, imageUrl, description, location } = group;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 hover:border-primary w-full">
      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={imageUrl}
          alt={groupName}
          className="rounded-xl object-cover h-48 md:h-56 w-full transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* Content */}
      <div className="card-body text-center space-y-2">
        {/* Group Name */}
        <h2 className="card-title justify-center text-primary text-lg md:text-xl font-semibold">
          {groupName}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {description?.length > 90 ? `${description.slice(0, 90)}...` : description}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 text-sm text-info font-medium">
          <IoLocationOutline className="text-lg" />
          <span>{location}</span>
        </div>

        {/* Action */}
        <div className="card-actions justify-center mt-3">
          <Link to={`/group/${_id}`}>
            <button className="btn btn-outline btn-primary btn-sm md:btn-md">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
