import React, { useState } from "react";

export default function IngredientList(){
   
    const [list, setList] = useState<string []>([]);
    const [input, setInput] = useState('')
   
    function AddIngredient(input: string) {
        
        setList([...list, input])
        setInput('');

    }

    function RemoveIngredient(item : string) {
        const newList = list.filter((currentIngredient) => currentIngredient !== item )
        setList(newList);
    }

    return(
        <>
        <input id='ingredient-input' type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => AddIngredient(input)}>Add!</button>
        <ul>
        {list.map(function (item) {
	    return <li>{item}
        <button onClick={() => RemoveIngredient(item)}>&times;</button>
        </li>;
            })}
        </ul>
        </>
    );
}