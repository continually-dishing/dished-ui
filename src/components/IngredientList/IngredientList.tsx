import React from "react";
import { Meal  } from "../../common/types/types";

interface IngredientListProps {
    mealsForWeek: Meal[],
}

export default function IngredientList( {mealsForWeek} : IngredientListProps) {
    
let shoppingList = mealsForWeek[0].ingredients.concat(mealsForWeek[1].ingredients, mealsForWeek[2].ingredients, mealsForWeek[3].ingredients,
    mealsForWeek[4].ingredients,mealsForWeek[5].ingredients,mealsForWeek[6].ingredients
    )

console.log('Weekly Meals ', shoppingList)

    return(
        <div>
            <ul>
            { shoppingList.map((item) => {
                return <li className='ingredient-item' key={item.id}>{item.name}</li>;
                })}            
            </ul>
        </div>
    );
}