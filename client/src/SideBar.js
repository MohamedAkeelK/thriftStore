import React from "react";

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
