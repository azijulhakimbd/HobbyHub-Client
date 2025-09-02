import React from "react";
import { FaUsers, FaBox, FaDollarSign } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow flex items-center gap-4">
          <FaUsers className="text-blue-500 text-3xl" />
          <div>
            <p className="text-lg font-semibold">1,250</p>
            <p className="text-gray-500">Total Users</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow flex items-center gap-4">
          <FaBox className="text-green-500 text-3xl" />
          <div>
            <p className="text-lg font-semibold">320</p>
            <p className="text-gray-500">Products</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow flex items-center gap-4">
          <FaDollarSign className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-lg font-semibold">$45,200</p>
            <p className="text-gray-500">Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
