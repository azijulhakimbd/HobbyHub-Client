import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom"; 

const GroupCard = ({ group }) => {
  const { _id, groupName, imageUrl, description, location } = group;

  return (
    <div className="card bg-base-200 text-base-content shadow-md hover:shadow-xl transition duration-300 w-full">
      <figure className="px-4 pt-4">
        <img
          src={imageUrl}
          alt={groupName}
          className="rounded-xl object-cover h-48 md:h-56 w-full"
        />
      </figure>
      <div className="card-body text-center space-y-2">
        <h2 className="card-title text-center text-lg md:text-xl font-bold">{groupName}</h2>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex items-center justify-center gap-2 text-lg ">
          <IoLocationOutline className="text-lg" />
          <span>{location}</span>
        </div>
        <div className="card-actions justify-center mt-2">
          <Link to={`/group/${_id}`}>
            <button className="btn btn-primary btn-sm md:btn-md">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
