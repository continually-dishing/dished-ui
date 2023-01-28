import {v4 as uuidv4} from 'uuid';
import React, { useState } from "react";
import './Cookbook.css';
//import  IngredientList  from "../../components/IngredientList/IngredientList";

export default function Cookbook() {

  interface Ingredient {
    ID: string,
    Name: string,
  }

interface Meal  { 
  name: string,
  difficulty: string,
  prepTime: number
  totalTime: number
  ingredients: Ingredient[] | null,
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

const [list, setList] = useState<string []>([]);
const [input, setInput] = useState('')

function AddIngredient(input: string) {
    
    if (input !== '') // make sure input isnt empty before adding it in
    {
        setList([...list, input])
        setInput('');
    }

}

function RemoveIngredient(item : string) {
    const newList = list.filter((currentIngredient) => currentIngredient !== item )
    setList(newList);
}

async function onSubmit() {

  let arr = new Array<Ingredient>(list.length);

 var inputs = document.getElementsByTagName('input');
 var selectInputs = document.getElementsByTagName('select');

for (let i = 0; i < list.length; i++)
{
    let newIngredient : Ingredient = {
      ID: uuidv4(),
      Name: list[i],
    }

    arr[i] = newIngredient;
}

  let newMeal : Meal = {
    name: inputs[0].value, 
    ingredients: arr,
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
      <div className="child">  <label>Name of meal:</label><br />
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
      <div className="child" style={{marginLeft:'20px'}}>
      <body>
        <label>Ingredients:</label><br />
        <input id='ingredient-input' type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button className='add-button' onClick={() => AddIngredient(input)}>Add!</button>
        <ul>
        {list.map(function (item) {
	    return <li className="ingredient-item">{item}
        <button onClick={() => RemoveIngredient(item)}>&times;</button>
        </li>;
            })}
        </ul>
        </body>
      </div>
      </div>
      <button className="submit-button" type="button" onClick={onSubmit}>Submit!</button>
</body>
    </>
  );

}