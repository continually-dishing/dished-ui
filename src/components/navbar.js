import React from 'react';
import './navbar.css'

function navbar() {
    return <div class="navbar">
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <div class="dropdown">
      <button class="dropbtn">Dropdown
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="Home">Link 1</a>
        <a href="Account">Link 2</a>
        <a href="Menu">Link 3</a>
      </div>
    </div>
  </div>
  }
  
  export default navbar;
