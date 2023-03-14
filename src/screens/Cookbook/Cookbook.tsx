import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import { Ingredient, Meal } from '../../common/types/types'
import './Cookbook.css';

export default function Cookbook() {

  const [input, setInput] = useState('')
  const [list, setList] = useState<string[]>([]);

  function AddIngredient(input: string) {

    if (input !== '') // make sure input isnt empty before adding it in
    {
      setList([...list, input])
      setInput('');
    }

  }

  function RemoveIngredient(item: string) {
    const newList = list.filter((currentIngredient) => currentIngredient !== item)
    setList(newList);
  }

  function returnBool(value: string) {
    switch (value) {
      case "yes":
      case "Yes":
        return true;
      default:
        return false;
    }
  }


  async function onSubmit() {

    let ingredientList = new Array<Ingredient>(list.length);

    var inputs = document.getElementsByTagName('input');
    var selectInputs = document.getElementsByTagName('select');

    for (let i = 0; i < list.length; i++) {
      let newIngredient: Ingredient = {
        id: uuidv4(),
        name: list[i],
      }

      ingredientList[i] = newIngredient;
    }

    let newMeal: Meal = {
      name: inputs[0].value,
      ingredients: ingredientList,
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

    if (!response.ok) {

      console.error("Error: ");
    }
    else if (response.status >= 400) {

      console.error('HTTP Error: ' + response.status + ' - ' + response.statusText);
    }
    else {
      console.log("success!")
    }

  }

  return (
    <>
      <h3>Your Cookbook!</h3>
      <div className="parent">
        <div className="child">
          <br /><label className='meal-label'>Name of meal:</label><br />
          <input id='name' className='meal-input'></input><br />
          <br /><label className='meal-label'>Difficulty:</label><br />
          <select id="difficulty-level" className='meal-input'>
            <option hidden selected label=" "></option>
            <option> Easy</option>
            <option> Intermediate</option>
            <option>Difficult</option>
          </select><br />
          <br /><label className='meal-label'>Prep time:</label><br />
          <input id='prepTime' className='meal-input'></input><br />
          <br /><label className='meal-label'>Total time:</label><br />
          <input id='totalTime' className='meal-input'></input><br />
          <br /><label className='meal-label'>Budget Friendly:</label><br />
          <select id="budget-friendly" className='meal-input'>
            <option hidden selected label=" "></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br />
          <br /><label className='meal-label'>Vegan:</label><br />
          <select id="vegan" className='meal-input'>
            <option hidden selected label=" "></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br />
          <br /><label className='meal-label'>Vegetarian:</label><br />
          <select id="vegetarian" className='meal-input'>
            <option hidden selected label=" "></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br />
        </div>
        <div className="child" style={{ marginLeft: '20px' }}>
          <label>Ingredients:</label><br />
          <input id='ingredient-input' type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button className='add-button' onClick={() => AddIngredient(input)}>Add!</button>
          <ul className='ingredient-list'>
            {list.map((item) => {
              return <li className="ingredient-item">{item}
                <button onClick={() => RemoveIngredient(item)}>&times;</button>
              </li>;
            })}
          </ul>
        </div>
      </div>
      <button className="submit-button" type="button" onClick={onSubmit}>Submit!</button>
    </>
  );

}