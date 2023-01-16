import React from "react";
import './Cookbook.css';

export default function Cookbook() {


interface Meal  { 
  name: string,
  difficulty: string,
  prepTime: number
  totalTime: number
  ingredients: string[] | null,
  budgetFriendly: boolean,
  vegan: boolean,
  vegetarian: boolean,
}

function returnBool(value: string) {
  switch(value)
  {
    case "yes": 
    case "Yes":
      return true;
    default:
      return false;
  }
}

function parseIngredients (ingredients : string) {
  let array :string[]

  if (ingredients !== null)
  {
     array = ingredients.split(', ')
     return array
  }
  return null
}

async function onSubmit() {

 var inputs = document.getElementsByTagName('input');
 var selectInputs = document.getElementsByTagName('select');

  let newMeal : Meal = {
    name: inputs[0].value, 
    ingredients: parseIngredients(inputs[1].value),
    difficulty: selectInputs[0].value, 
    prepTime: +inputs[2].value, 
    totalTime: +inputs[3].value,
    budgetFriendly: returnBool(selectInputs[1].value),
    vegan: returnBool(selectInputs[2].value),
    vegetarian: returnBool(selectInputs[3].value)
  }

  console.log(JSON.stringify(newMeal))

    const response = await fetch('https://localhost:5001/api/v1/meals', {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMeal),
    });

if (!response.ok) 
{ 

    console.error("Error: ");
}
else if (response.status >= 400) {

    console.error('HTTP Error: '+response.status+' - '+response.statusText);
}
else{
  console.log("success!")
}

}

  return (
    <>
      <h3>Your Cookbook!</h3>
      <body>
      <div id='myCookBookForm' className="cookbook-form">
        <label>Name of meal:</label><br />
        <input id='name'></input><br />
        <label>Difficulty:</label><br />
        <select id="difficulty-level">
        <option hidden selected label=" "></option>
          <option> Easy</option>
          <option> Intermediate</option>
          <option>Difficult</option>
        </select><br />
        <label>Ingredients:</label><br />
        <input id='ingredients'></input><br />
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
        <button type="button" onClick={onSubmit}>Submit!</button>
      </div>
      </body>
    </>
  );

}