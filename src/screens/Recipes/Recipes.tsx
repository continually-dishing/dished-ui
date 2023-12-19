import React, { useEffect, useState } from "react";
import { Meal } from "../../common/types/types";
import MealItem from "../../components/MealItem/MealItem";
import "./Recipes.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const recipes = require("../../db/db.json");

export default function Recipes() {
  const [updatedItems, setUpdatedItems] = useState(recipes);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {}, [updatedItems, searchValue]);

  function handleRecipeSearchChange() {
    var input = (
      document.getElementById("recipe-searchBar") as HTMLInputElement
    ).value;
    setSearchValue(input);
    console.log("Input: ", input);

    if (input === "") {
      setUpdatedItems(recipes);
    } else {
      let filtered = recipes.filter((item: any) =>
        item.name.toLocaleLowerCase().includes(input.toLowerCase())
      );
      setUpdatedItems(filtered);
    }
  }

  return (
    <>
      <SearchBar
        searchBarId="recipe-searchBar"
        onSearchChange={handleRecipeSearchChange}
        value={searchValue}
      />
      <ul>
        <ul>
          {updatedItems.map((item: Meal) => (
            <li>
              <MealItem item={item} />
            </li>
          ))}
        </ul>
      </ul>
    </>
  );
}
