import React from "react";
import { Outlet } from "react-router";
import { FaPlus, FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 hidden md:block">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">Dashboard</h2>
        <nav className="flex flex-col gap-4">
           <li>
                     <NavLink to="/create-group" className="flex items-center gap-2">
                       <FaPlus /> Create Group
                     </NavLink>
                   </li>
                   <li>
                     <NavLink to="/my-groups" className="flex items-center gap-2">
                       <FaUserFriends /> My Groups
                     </NavLink>
                   </li>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Logout
          </button>
        </header>

        {/* Dynamic content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
