import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900 boxShadow w-full p-6 md:p-9 transition-colors duration-300">
        <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
          <div className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap">
            <p className="text-[0.9rem] text-[#424242] dark:text-gray-300 hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              <NavLink className="border-b-blue-600 shadow btn btn-ghost" to={"/"}>
                Home
              </NavLink>
            </p>
            <p className="text-[0.9rem] text-[#424242] dark:text-gray-300 hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              <NavLink className="border-b-blue-600 shadow btn btn-ghost" to={"/allgroups"}>
                All Groups
              </NavLink>
            </p>
            <p className="text-[0.9rem] text-[#424242] dark:text-gray-300 hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              <NavLink className="border-b-blue-600 shadow btn btn-ghost" to={"/creategroup"}>
                Create Group
              </NavLink>
            </p>
            <p className="text-[0.9rem] text-[#424242] dark:text-gray-300 hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              <NavLink className="border-b-blue-600 shadow btn btn-ghost" to={"/mygroups"}>
                My Groups
              </NavLink>
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-[10px] text-[#424242] dark:text-gray-300">
            <a
              href="https://www.facebook.com/AzijulHakimbd"
              className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300"
            >
              <CgFacebook />
            </a>
            <a
              href="https://www.twitter.com/AzijulHakimbd"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.instagram.com/AzijulHakimbd"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/AzijulHakimbd"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300"
            >
              <BsLinkedin />
            </a>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
            <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600 dark:text-gray-400 text-center">
              © 2025 HobbyHub: A Local Hobby Group Organizer. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
