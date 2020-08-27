import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/">
        <h1 className="App-logo" alt="logo"></h1>
      </Link>
    </div>
  );
};

export default NavBar;
