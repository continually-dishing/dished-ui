import React from "react";
import './NavigationBar.css'
import { Link } from "react-router-dom";


export default function NavigationBar() {
  return (
    <div className="topnav">
      <b className="name">Dished</b>
      <a href="/"><Link to="/" />Home</a>
      <a href="/menuPlanner"> <Link to="/menuPlanner" />Menu Planner</a>
      <a href="/cookBook"><Link to="/cookBook" />Cookbook</a>
      <a href="/about"><Link to="/about" />About</a>
    </div>

  );
}