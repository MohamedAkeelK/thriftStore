import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Students from "./Students";
import Navbar from "./Navbar";
import Home from "./Home";
import Tops from "./Tops";
import Denim from "./Denim";
import Jackets from "./Jackets";
import Bags from "./Bags";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/allUsers" render={(routerProps) => <Students />} />
        
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

          path="/tops"
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


        <Route

          exact
          path="/bags"
          render={(routerProps) => <Bags {...routerProps} />}
        />
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

