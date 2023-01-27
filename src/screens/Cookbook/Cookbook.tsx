import React from "react";
import './Cookbook.css';
import NewRecipe from "../../components/NewRecipe/NewRecipe";
import  IngredientList  from "../../components/IngredientList/IngredientList";

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
 var ingredientItems = document.getElementsByTagName('li');

for(let i = 0; i < ingredientItems.length; i++)
{
  console.log(ingredientItems[i].value)
}

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
    <body>
      <h3>Your Cookbook!</h3>
      <div className="parent">
      <div className="child"><NewRecipe/></div>
      <div className="child" style={{marginLeft:'20px'}}><IngredientList/></div>
      </div>
      <button className="submit-button" type="button" onClick={onSubmit}>Submit!</button>
      </body>

    </>
  );

}