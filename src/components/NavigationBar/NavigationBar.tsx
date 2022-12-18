import React from "react";
import './NavigationBar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import Home from '../../screens/Home/Home';
  import WeeklyMenu from '../../screens/WeeklyMenu/WeeklyMenu';
  import Cookbook from '../../screens/Cookbook/Cookbook';
import { Link } from "react-router-dom";

export default function NavigationBar () {
        return(
            <Router>
            <div className="topnav">
                <b className="name">Dished</b>
                    <a href= "/"><Link to="/"/>Home</a>
                    <a href="/weeklyMenu"> <Link to="/weeklyMenu"/>Menu</a>
                    <a href="/cookBook"><Link to="/cookBook"/>Cookbook</a>
                    <a href="/about"><Link to="/about"/>About</a>
            </div>
            <Routes>
              <Route path="/" element={<Home />} >
              </Route>
            </Routes>
            <Routes>
              <Route path="/cookBook" element={<Cookbook />} >
              </Route>
            </Routes>
            <Routes>
              <Route path="/weeklyMenu" element={<WeeklyMenu />}>
              </Route>
            </Routes>
            </Router>
        );
}