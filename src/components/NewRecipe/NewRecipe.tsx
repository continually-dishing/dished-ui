import React from "react";

export default function NewRecipe() {
    return (
<>
<div id='myCookBookForm'>
        <label>Name of meal:</label><br />
        <input id='name'></input><br />
        <label>Difficulty:</label><br />
        <select id="difficulty-level">
        <option hidden selected label=" "></option>
          <option> Easy</option>
          <option> Intermediate</option>
          <option>Difficult</option>
        </select><br />
        <label>Prep time:</label><br />
        <input id='prepTime'></input><br />
        <label>Total time:</label><br />
        <input id='totalTime'></input><br />
        <label>Budget Friendly:</label><br />
        <select id="budget-friendly">
        <option hidden selected label=" "></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select><br />
        <label>Vegan:</label><br />
        <select id="vegan">
        <option hidden selected label=" "></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select><br />
        <label>Vegetarian:</label><br />
        <select id="vegetarian">
        <option hidden selected label=" "></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select><br />
      </div>
</>
    );
}