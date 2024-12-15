import React, { useState } from "react";
import navbarLogo from "../assets/images/navbar_logo.svg";
import crossIcon from "../assets/images/cross_icon.svg";
import menuIcon from "../assets/images/menu_icon.svg";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <img
          onClick={() => navigate(`/`)}
          src={navbarLogo}
          alt="Abinash Neupane"
          className="w-44 cursor-pointer"
        />
        <ul className="hidden md:flex items-start gap-5 font-normal">
          <NavLink to="/">
            <li className="py-1 group">Home</li>

            <hr className="border-none outline-none h-0.5 bg-slate-500 w-2/3 m-auto group-hover:block hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1 group:">About</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 w-2/3 m-auto group-hover:block hidden" />
          </NavLink>
          <NavLink to="/experience">
            <li className="py-1 group:">Experience</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 w-2/3 m-auto group-hover:block hidden" />
          </NavLink>
          <NavLink to="/skills">
            <li className="py-1 group:">Skills</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 w-2/3 m-auto group-hover:block hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1 group:">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 w-2/3 m-auto group-hover:block hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          <img
            onClick={() => setShowMenu(true)}
            src={menuIcon}
            alt="Icon"
            className="m-6 md:hidden"
          />
          {/* For Mobile Menu */}
          <div
            className={`${
              showMenu
                ? "fixed top-0 right-0 w-full h-full opacity-100"
                : "hidden opacity-0"
            } md:hidden z-20 bg-white transition-all duration-300`}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <img
                className="w-7 cursor-pointer"
                onClick={() => setShowMenu(false)}
                src={crossIcon}
                alt="Close Menu"
              />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <p className="px-4 py-2 rounded inline-block hover:bg-blue-100 transition-all duration-200">
                  HOME
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <p className="px-4 py-2 rounded inline-block hover:bg-blue-100 transition-all duration-200">
                  ABOUT
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/experience">
                <p className="px-4 py-2 rounded inline-block hover:bg-blue-100 transition-all duration-200">
                  EXPERIENCE
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/skills">
                <p className="px-4 py-2 rounded inline-block hover:bg-blue-100 transition-all duration-200">
                  SKILLS
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <p className="px-4 py-2 rounded inline-block hover:bg-blue-100 transition-all duration-200">
                  CONTACT
                </p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
