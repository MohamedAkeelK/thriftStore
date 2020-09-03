import React from "react";
import { Link } from "react-router-dom";
import Tops from "./Tops";
import { Route, Switch } from "react-router-dom";
import Denim from "./Denim";
import Jackets from "./Jackets";

const SideBar = (props) => {
  return (
    <div className="sidenav">
      {/* <Switch>
        <Route
          exact
          path="/tees"
          render={(routerProps) => <Tops {...routerProps} />}
        />
        <Route
          exact
          path="/denim"
          render={(routerProps) => <Denim {...routerProps} />}
        />
        <Route
          exact
          path="/jackets"
          render={(routerProps) => <Jackets {...routerProps} />}
        />
      </Switch>  */}
      <div class="sidenav">
        <a href="#">About</a>
        <a href="#">Tees/Tops</a>
        <a href="#">Jackets</a>
        <a href="#">Denims</a>
        <a href="#">Bags</a>
      </div>
    </div>
  );
};
export default SideBar;
