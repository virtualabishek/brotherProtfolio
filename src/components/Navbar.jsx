import React, { useState } from "react";
import navbarLogo from "../assets/images/navbar_logo.svg";
import crossIcon from "../assets/images/cross_icon.svg";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="">
        <img
          onClick={() => navigate(`/`)}
          src={navbarLogo}
          alt="Abinash Neupane"
          className="w-44 cursor-pointer"
        />
        <ul className="hidden md:flex items-start gap-5 font-normal">
          <NavLink to="/">
            <li className="py-1">Home</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 w-2/3 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">About</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 m-auto hidden" />
          </NavLink>
          <NavLink to="/experience">
            <li className="py-1">Experience</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 m-auto hidden" />
          </NavLink>
          <NavLink to="/skills">
            <li className="py-1">Skills</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-slate-500 m-auto hidden" />
          </NavLink>
        </ul>
        {/* For Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-full bg-white z-20 transition-all duration-300 ${
            showMenu ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
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
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/experience">
              <p className="px-4 py-2 rounded inline-block">EXPERIENCE</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/skills">
              <p className="px-4 py-2 rounded inline-block">SKILLS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};
