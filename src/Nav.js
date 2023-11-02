import React from "react";
import logo from "./logo.png";
function Nav() {
  return (
    <div className="flex px-2 mx-7 justify-between">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mr-4" />
      </div>
      <nav className="flex justify-center items-center">
        <ul className="navbar-nav cursor-pointer py-2 px-4  text-blue-500 flex space-x-3">
          <li className="nav-item active">
            <a href="#">Menu</a>
          </li>
          <li className="nav-item active">
            <a href="#">Location</a>
          </li>
          <li className="nav-item active">
            <a href="#">About</a>
          </li>
          <li className="nav-item active">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="rounded-lg bg-purple-400 text-black-400 font-medium px-3 py-1.5  ">
          Login
        </button>
      </nav>
    </div>
  );
}

export default Nav;
