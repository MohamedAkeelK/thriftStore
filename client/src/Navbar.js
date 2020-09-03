import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { Input, Icon } from "semantic-ui-react";

const NavBar = (props) => {
  return (
    <div>
      <div className="blackBar">Free Shipping on Orders over $50</div>
      <header className="header">
        <ul className="main-nav">
          <li>
            {" "}
            <Link to="/">
              <Icon name="search" />
            </Link>
          </li>

          <li>
            {" "}
            <Link to="/">
              <img className="logoimg" src={logo}></img>
            </Link>
          </li>

          <li>
            {" "}
            <Link to="/">
              <Icon name="shopping bag" />
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/">Sign in</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;