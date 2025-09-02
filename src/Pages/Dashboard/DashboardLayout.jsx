import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaPlus, FaUserFriends, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";
import { AuthContext } from "../../Context/AuthContext"; // Adjust path

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { userLogout } = useContext(AuthContext);

  const handleLogout = () => {
    userLogout();
  };

  return (
    <div className="min-h-screen flex bg-base-100 transition-colors">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close Sidebar"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-base-200 shadow-lg p-5 transform transition-transform duration-300 z-40
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between md:block">
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-xl text-primary font-extrabold flex items-center gap-2"
          >
            <img
              className="h-12"
              src="https://i.postimg.cc/Tw0W1t20/Hobby-Hub1.png"
              alt="HobbyHub Logo"
            />
          </Link>

          {/* Mobile close button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-4 mt-6">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/dashboard/create-group"
                className="flex items-center gap-2 hover:text-primary"
              >
                <FaPlus /> Create Group
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-groups"
                className="flex items-center gap-2 hover:text-primary"
              >
                <FaUserFriends /> My Groups
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Topbar */}
        <header className="bg-base-200 shadow px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Sidebar"
            >
              <FaBars />
            </button>
            <h1 className="text-lg md:text-xl font-semibold">Admin Panel</h1>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm md:text-base"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Dynamic content */}
        <main className="flex-1 p-4 md:p-6 bg-base-100 transition-colors">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
