import React from "react";
import './NavigationBar.css'
import { Link } from "react-router-dom";

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div class="topnav">
                    <b class="name">Dished</b>
                    <a class="active" href="/">Home</a>
                    <a href="/weeklyMenu" component={Link} to="/weeklyMenu">Menu</a>
                    <a href="/countact">Contact</a>
                    <a href="/about">About</a>
                </div>
            </div>
        );
    }
}