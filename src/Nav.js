import React from "react";

function Nav() {
  return (
    <div className="flex px-2 justify-center">
      <div className="flex items-center">
        <img src="" alt="logo" className="mr-4" />
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
      </nav>
    </div>
  );
}

export default Nav;
