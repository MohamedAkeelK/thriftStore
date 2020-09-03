import React from "react";


const footer = (props) => {
  return (
    <div>
      <footer>
      <h2 className="footerHeading"> Thrift Store </h2>
        <ul className="footerWrapper">
          <li className ="footerItems"><a href="/">|    Home     |</a></li>
          <li className ="footerItems"><a href="/">|    About    |</a></li>
          <li className ="footerItems"><a href="/">|    Contact    |</a></li>
        </ul>

        <ul className="footerWrapper">
          <li className ="footerItems"><a href="/">|    Bags     |</a></li>
          <li className ="footerItems"><a href="/">|    Jackets    |</a></li>
          <li className ="footerItems"><a href="/">|    Denim    |</a></li>
        </ul>

        <small>@ 2020 Thrift Store all rights reserved</small>
      </footer>

    </div>
  );
};

export default footer;
