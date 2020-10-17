// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "./logo.png";

// const SideBar = (props) => {
//   return (
//     <div className="sidenav">
//       {/* <Switch>
//         <Route
//           exact
//           path="/tees"
//           render={(routerProps) => <Tops {...routerProps} />}
//         />
//         <Route
//           exact
//           path="/denim"
//           render={(routerProps) => <Denim {...routerProps} />}
//         />
//         <Route
//           exact
//           path="/jackets"
//           render={(routerProps) => <Jackets {...routerProps} />}
//         />
//       </Switch>  */}
//       {/* <div class="sidenav">
//         <a href="#">About</a>
//         <a href="#">Tees/Tops</a>
//         <a href="#">Jackets</a>
//         <a href="#">Denims</a>
//         <a href="#">Bags</a>
//       </div> */}

//       <ul className="side-nav-ul">
//         <li>
//           {" "}
//           <Link to="/">
//             <p>Jackets</p>
//             <img className="logoimg" src={logo}></img>
//           </Link>
//         </li>

//         <li>
//           {" "}
//           <Link to="/Denims">Denims</Link>
//         </li>

//         <li>
//           {" "}
//           <Link to="/bags"></Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default SideBar;

import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div>
      <ul className="side-nav">
        <li>
          {" "}
          <Link to="/Jackets">jackets</Link>
        </li>

        <li>
          {" "}
          <Link to="/Denim">Denim</Link>
        </li>

        <li>
          {" "}
          <Link to="/Bags">Bags</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
