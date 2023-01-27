import React, { useState } from "react";
import './IngredientList.css'


export default function IngredientList(){
   
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

    return(
        <>
            <body>
        <label>Ingredients:</label><br />
        <input id='ingredient-input' type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => AddIngredient(input)}>Add!</button>
        <ul>
        {list.map(function (item) {
	    return <li>{item}
        <button onClick={() => RemoveIngredient(item)}>&times;</button>
        </li>;
            })}
        </ul>
        </body>
        </>
    );
}