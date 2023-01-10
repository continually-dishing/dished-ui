import React from "react";
import './Cookbook.css';

export default function Cookbook() {

  return (
    <>
      <h3>Your Cookbook!</h3>
      <body>
      <form className="cookbook-form">
        <label>Name of meal:</label><br />
        <input></input><br />
        <label>Difficulty:</label><br />
        <select id="difficulty-level" name="difficulty-level">
        <option hidden selected label=" "></option>
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="difficult">Difficult</option>
        </select><br />
        <label>Ingredients:</label><br />
        <input></input><br />
        <label>Prep time:</label><br />
        <input></input><br />
        <label>Total time:</label><br />
        <input></input><br />
        <label>Budget Friendly:</label><br />
        <select id="budget-friendly" name="budget-friendly">
        <option hidden selected label=" "></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select><br />
        <label>Vegan:</label><br />
        <select id="vegan" name="vegan">
        <option hidden selected label=" "></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select><br />
        <label>Vegetarian:</label><br />
        <select id="vegetarian" name="vegetarian">
        <option hidden selected label=" "></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select><br />
        <button>Submit!</button>
      </form>
      </body>
    </>
  );

}