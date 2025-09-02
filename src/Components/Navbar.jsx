import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import ThemeToggle from "../Pages/ThemeToggle";

// New React Icons for NavLinks
import {
  FaHome,
  FaUsers,
  FaPlus,
  FaUserFriends,
  FaInfoCircle,
  FaPhoneAlt,
  FaHandsHelping,
} from "react-icons/fa";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    userLogout();
    toast.success("Logout Successfully");
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-2">
          <FaHome /> Home
        </NavLink>
      </li>

      {user && (
        <>
        
        
        </>
      )}

      <li>
        <NavLink to="/about" className="flex items-center gap-2">
          <FaInfoCircle /> About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="flex items-center gap-2">
          <FaPhoneAlt /> Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" className="flex items-center gap-2">
          <FaHandsHelping /> Support
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar shadow fixed z-50 top-0 w-full px-5 lg:px-10 poppins-bold transition-all duration-300 ${
        isScrolled ? "bg-base-100/5 backdrop-blur-md shadow-sm" : "bg-base-100"
      }`}
    >
      {/* Left: Logo + Mobile Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl text-primary font-extrabold"
        >
          <img
            className="h-18"
            src="https://i.postimg.cc/Tw0W1t20/Hobby-Hub1.png"
            alt="HobbyHub Logo"
          />
        </Link>
      </div>

      {/* Center: Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navItems}</ul>
      </div>

      {/* Right: ThemeToggle + Auth Buttons */}
      <div className="navbar-end space-x-2">
        <ThemeToggle />
        {user ? (
          <>
            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/2kR9yQp/default-avatar.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 flex items-center gap-1"
                  >
                    <RiLogoutCircleRLine size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-lime-500 text-white flex items-center gap-1"
            >
              <IoMdLogIn size={20} /> Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
