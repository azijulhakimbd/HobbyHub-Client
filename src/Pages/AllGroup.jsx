import React from "react";
import { useLoaderData } from "react-router-dom"; 
import GroupCard from "../Components/GroupCard";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";

const AllGroup = () => {
  const groups = useLoaderData();

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 min-h-screen bg-base-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Groups</title>
        <link rel="canonical" href="https://b11-a10-papiya.netlify.app/allgroups" />
      </Helmet>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
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

      {/* Group Grid */}
      {groups?.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {groups.map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      ) : (
        <div className="text-center text-lg text-warning font-medium">
          No groups available.
        </div>
      )}
    </div>
  );
};

export default AllGroup;
