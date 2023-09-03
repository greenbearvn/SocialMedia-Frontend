import React from "react";
import NavBar from "./Header";

const LayoutBackend = ({ children }) => {
  return (
    <body className="container">
      <NavBar />
      <div>{children}</div>
    </body>
  );
};

export default LayoutBackend;
