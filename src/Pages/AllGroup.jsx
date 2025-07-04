import React from "react";
import { useLoaderData } from "react-router-dom";
import GroupCard from "../Components/GroupCard";
import { Typewriter } from "react-simple-typewriter";

const AllGroup = () => {
  const groups = useLoaderData();

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 min-h-screen bg-base-100">
      {/* Heading with DaisyUI Typography */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        <Typewriter
          cursor
          cursorBlinking
          delaySpeed={1000}
          deleteSpeed={25}
          loop={0}
          typeSpeed={75}
          words={["All Groups"]}
        />
      </h1>

      {/* Group Grid Responsive using DaisyUI Cards */}
      {groups?.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {groups.map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <div className="alert alert-warning shadow-lg w-fit mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"
              />
            </svg>
            <span>No groups available.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllGroup;
