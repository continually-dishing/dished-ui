import React, { useState } from "react";
import './WeekView.css';
import IngredientList from '../../components/IngredientList/IngredientList';
import { Meal } from '../../common/types/types'

interface Error {
    message: string
}

export default function WeekView() {

    const [error, setError] = useState<Error>();
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Meal[]>([]);
    const [ingredientListFlag, setIngredientListFlag] = useState(false);

if(items.length === 0)
{
 
        fetch('https://localhost:5001/api/v1/meals', {
            method: "GET",
            mode: "cors",
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error.message)
                    console.log(error)
                }
            )
        if (error) {
            console.log(error.message)
            return (<div>Error!</div>)
        }
        else if (!isLoaded) {
            return (
                <div>Loading....</div>
            )
        }
     
    }

    function ingredientListOnClick(){

        setIngredientListFlag(!ingredientListFlag)     

    }



            return(
                <div>
                <div className="container" style={{float: 'left', marginLeft: '5%'}}>
                    <h1>Weekly Menu:</h1>
                        <ul className=".week-menu-list">
                            <div className="input">
                                <li><label className='weekday-label'>Monday: </label><text className='meal-option'>{items[0].name}</text></li>
                            </div>
                            <div className="input">
                                <li><label className='weekday-label'>Tuesday: </label><text className='meal-option'>{items[1].name}</text></li>
                            </div>
                            <div className="input">
                                <li><label className='weekday-label'>Wednesday: </label><text className='meal-option'>{items[2].name}</text></li>
                            </div>
                            <div className="input">
                                <li><label className='weekday-label'>Thursday: </label><text className='meal-option'>{items[3].name}</text></li>
                            </div>
                            <div className="input">
                                <li><label className='weekday-label'>Friday: </label><text className='meal-option'>{items[4].name}</text></li>
                            </div>
                            <div className="input">
                                <li><label className='weekday-label'>Saturday: </label><text className='meal-option'>{items[5].name}</text></li>
                            </div>
                            <div className="input">
                                <li><label className='weekday-label'>Sunday: </label><text className='meal-option'>{items[6].name}</text></li>
                            </div>
                        </ul>
                <div>
                        <button className="generateButton" onClick={onclick}>Generate!</button>
                        <button className="ingredientButton" onClick={ingredientListOnClick}>Generate Ingredient List!</button>
                    </div>
                </div>
                <div>
                        {ingredientListFlag &&
                        <div className='container' style={{float: 'right', marginRight:'5%'}}>
                        <h1>Ingredient List!</h1>
                        <IngredientList mealsForWeek={items}/>
                        </div>
                        }
                </div>
            </div>
            );
        

    function onclick() {
        fetch('https://localhost:5001/api/v1/meals', {
            method: "GET",
            mode: "cors",
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error.message)
                    console.log(error)
                }
            )
        if (error) {
            console.log(error.message)
            return (<div>Error!</div>)
        }
        else if (!isLoaded) {
            return (
                <div>Loading....</div>
            )
        }
    }
}
