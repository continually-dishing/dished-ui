import React from "react";
import { Meal } from "../../common/types/types";
import "./MealItem.css";

export interface MealItemProps {
  item: Meal;
}

export default function MealItem({ item }: MealItemProps) {
  const path = `./${item.picturePath}`;

  function handleMenuItemOnClick() {
    console.log(item.name);
  }
  return (
    <>
      <div className="container" onClick={handleMenuItemOnClick}>
        <img className="menu-image" src={path} alt="" />
        <br />
        <strong>{item.name}</strong>
      </div>
    </>
  );
}
