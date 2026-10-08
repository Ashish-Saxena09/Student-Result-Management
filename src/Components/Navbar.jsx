import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/StudentForm">StudentForm</Link>
      <Link to="/StudentList">StudentList</Link>
    </div>
  );
}
