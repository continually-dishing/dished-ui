import React from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleRecipesOnClick() {
    navigate("/recipes");
  }

  return (
    <>
      <SearchBar />
      <div className="text-container">
        <h2 className="home-heading">Prep Preserve Propose</h2>
      </div>
      <Button
        label="Recipes"
        handleClick={handleRecipesOnClick}
        width="70%"
        color="#4C31DF"
        fontColor="white"
      />
    </>
  );
}
