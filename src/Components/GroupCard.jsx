import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";

const GroupCard = ({ group }) => {
  const { _id, groupName, imageUrl, description, location } = group;

  return (
    <div className="card bg-[#efefef] dark:bg-gray-800 text-gray-800 dark:text-white w-full hover:shadow-2xl sm:w-80 md:w-96 lg:w-200 mx-auto transition-colors duration-300">
      <figure className="px-4 pt-4">
        <img
          src={imageUrl}
          alt="Group Photo"
          className="rounded-xl object-cover lg:h-100 w-full"
        />
      </figure>
      <div className="card-body items-center text-center space-y-2">
        <h2 className="card-title text-lg md:text-xl">{groupName}</h2>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-300">
          <IoLocationOutline className="text-lg" />
          <span>{location}</span>
        </div>
        <div className="card-actions">
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
