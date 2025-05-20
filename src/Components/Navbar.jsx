import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import UserProfile from "./UserProfile";

const Navbar = () => {
   const {user,}=use(AuthContext);
  const handleLogout=()=>{
    
    toast.success("Logout Successfully")
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/allgroups"}>All Groups</NavLink>
            </li>
            <li>
              <NavLink to={"/creategroup"}>Create Group</NavLink>
            </li>
            <li>
              <NavLink to={"/mygroups"}>My Groups</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-blue-700 font-extrabold text-xl">
          Hobby<span className="font-medium text-violet-700">Hub</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/allgroups"}>All Groups</NavLink>
            </li>
            <li>
              <NavLink to={"/creategroup"}>Create Group</NavLink>
            </li>
            <li>
              <NavLink to={"/mygroups"}>My Groups</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
         {
          user? <>
          <UserProfile></UserProfile>
          <button onClick={handleLogout} className="btn btn-primary">Log Out</button>
          </>
          :
          <Link className="btn btn-primary" to={'/login'}>Login</Link>
          }
      </div>
    </div>
  );
};

export default Navbar;
