import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Students from "./Students";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/allUsers" render={(routerProps) => <Students />} />
          hello
        {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://react.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;

