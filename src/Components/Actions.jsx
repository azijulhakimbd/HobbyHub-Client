import React from 'react';
import { Link } from "react-router-dom";
const Actions = () => {
    return (
         <div className="bg-[#efefef] rounded-2xl text-lg py-12 text-center px-4">
      <h2 className="text-3xl font-semibold mb-4">
        Ready to explore your hobby?
      </h2>
      <p className="mb-6 text-lg">Join a group or create your own today!</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link to="/all-groups" className="btn btn-outline text-lg border-info">
          Browse Groups
        </Link>
        <Link to="/create-group" className="btn btn-info">
          Create Group
        </Link>
      </div>
    </div>
    );
};

export default Actions;