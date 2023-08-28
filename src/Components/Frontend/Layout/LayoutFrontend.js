import React from "react";
import NavBar from "./Navbar";
import SideBar from "./SideBar";

const LayoutFrontend = ({ children }) => {
  return (
    <body>
      <div id="wrapper">
        <NavBar />
        <SideBar />
        <div>{children}</div>
      </div>
    </body>
  );
};

export default LayoutFrontend;
