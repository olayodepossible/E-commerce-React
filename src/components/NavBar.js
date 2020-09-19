import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-icon" />
            NaV
          </Link>
          <div className="menu-icon">{click ? <FaTimes /> : <FaBars />}</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
