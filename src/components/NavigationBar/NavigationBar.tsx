import React from "react";
import { BiHomeAlt2, BiBook } from "react-icons/bi";
import { GiMeal } from "react-icons/gi";
import "./NavigationBar.css";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  function handleMenuClick() {
    navigate("/weekly-menu");
  }

  function handleHomeClick() {
    navigate("/home");
  }

  function handleRecipesClick() {
    navigate("/recipes");
  }

  return (
    <>
      <div className="nav-bar-container">
        <BiBook onClick={handleMenuClick} className="icon" />
        <BiHomeAlt2 onClick={handleHomeClick} className="icon" />
        <GiMeal onClick={handleRecipesClick} className="icon" />
      </div>
    </>
  );
}
