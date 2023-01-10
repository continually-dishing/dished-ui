import React from "react";
import './NavigationBar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import Home from '../../screens/Home/Home';
  import MenuGenerator from '../../screens/MenuGenerator/MenuGenerator';
  import Cookbook from '../../screens/Cookbook/Cookbook';
  import WeeklyMenu from '../../screens/WeeklyMenu/WeeklyMenu';
  import MonthlyMenu from '../../screens/MonthlyMenu/MonthlyMenu';
import { Link } from "react-router-dom";

export default function NavigationBar () {
        return(
            <Router>
            <div className="topnav">
                <b className="name">Dished</b>
                    <a href= "/"><Link to="/"/>Home</a>
                    <a href="/menuPlanner"> <Link to="/menuPlanner"/>Menu Planner</a>
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
              <Route path="/menuPlanner" element={<MenuGenerator />}>
              </Route>
            </Routes>
            <Routes>
              <Route path="/weeklyMenu" element={<WeeklyMenu />}>
              </Route>
            </Routes>
            <Routes>
              <Route path="/monthlyMenu" element={<MonthlyMenu />}>
              </Route>
            </Routes>
            </Router>
        );
}