import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 md:h-16">
          <a className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer text-center md:text-left">
            KeenKeeper
          </a>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 mt-3 md:mt-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              Stats
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
