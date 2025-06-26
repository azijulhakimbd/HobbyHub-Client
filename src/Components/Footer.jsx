import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { NavLink } from "react-router-dom"; // ✅ Fixed import

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-10 pb-5 transition-all duration-300">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6">

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
          <NavLink to="/" className="btn btn-ghost text-base-content hover:text-primary">Home</NavLink>
          <NavLink to="/all-groups" className="btn btn-ghost text-base-content hover:text-primary">All Groups</NavLink>
          <NavLink to="/create-group" className="btn btn-ghost text-base-content hover:text-primary">Create Group</NavLink>
          <NavLink to="/my-groups" className="btn btn-ghost text-base-content hover:text-primary">My Groups</NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.facebook.com/AzijulHakimbd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:bg-blue-600 p-2 rounded-full transition"
          >
            <CgFacebook />
          </a>
          <a
            href="https://www.twitter.com/AzijulHakimbd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:bg-sky-500 p-2 rounded-full transition"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.instagram.com/AzijulHakimbd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:bg-pink-500 p-2 rounded-full transition"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/AzijulHakimbd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:bg-blue-700 p-2 rounded-full transition"
          >
            <BsLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-base-300 pt-4 text-xs text-center text-gray-500 dark:text-gray-400 w-full">
          © 2025 HobbyHub — A Local Hobby Group Organizer. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
