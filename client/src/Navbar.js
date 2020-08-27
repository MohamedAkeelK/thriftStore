import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/">
        <h1 className="logo">home</h1>
      </Link>
    </div>
  );
};

export default NavBar;
