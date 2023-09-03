import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

///         CSS
import "./Components/Frontend/Layout/asset/css/icons.css";
import "./Components/Frontend/Layout/asset/css/style.css";
import "./Components/Frontend/Layout/asset/css/tailwind.css";
import "./Components/Frontend/Layout/asset/css/uikit.css";


///// JS



import UserIndex from "./Components/Admin/User/UserIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<UserIndex />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
