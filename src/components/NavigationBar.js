import React from "react";
import './NavigationBar.css'

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div class="topnav">
                    <b class="name">Dished</b>
                    <a class="active" href="#home">Home</a>
                    <a href="news">News</a>
                    <a href="contact">Contact</a>
                    <a href="about">About</a>
                </div>
            </div>
        );
    }
}