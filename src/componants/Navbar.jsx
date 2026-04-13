import React from "react";
import { FaHome } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { IoTimerOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 md:h-16">
          <a className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer text-center md:text-left">
            KeenKeeper
          </a>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-1 mt-3 md:mt-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded text-sm transition-colors cursor-pointer flex gap-1 items-center ${
                  isActive
                    ? "bg-[#244d3f] text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <FaHome className="inline" />
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `px-4 py-2 rounded text-sm transition-colors cursor-pointer flex gap-1 items-center ${
                  isActive
                    ? "bg-[#244d3f] text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <IoTimerOutline className="inline" />
              Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `px-4 py-2 rounded text-sm transition-colors cursor-pointer flex gap-1 items-center ${
                  isActive
                    ? "bg-[#244d3f] text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <ImStatsBars className="inline" />
              Stats
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
