import React, { useState } from "react";
import './WeekView.css'

interface Error {
    message: string
}

interface Meal {
    id: string
    name: string,
    vegetarian: boolean,
    vegan: boolean,
    prepTime: string,
}


export default function WeekView() {

    const [error, setError] = useState<Error>();
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Meal[]>([]);
if(items.length === 0)
{
        return (

            <div>
                <div className="container">
                    <h1>Weekly Menu:</h1>
                        <ul>
                            <div className="input">
                                <li><label>Monday: </label></li>
                            </div>
                            <div className="input">
                                <li><label>Tuesday: </label></li>
                            </div>
                            <div className="input">
                                <li><label>Wednesday: </label></li>
                            </div>
                            <div className="input">
                                <li><label>Thursday: </label></li>
                            </div>
                            <div className="input">
                                <li><label>Friday: </label></li>
                            </div>
                            <div className="input">
                                <li><label>Saturday: </label></li>
                            </div>
                            <div className="input">
                                <li><label>Sunday: </label></li>
                            </div>
                        </ul>
                <div>
                        <button className="generateButton" onClick={onclick}>Generate!</button>
                    </div>
                </div>
            </div>
        );
        }
        else
        {
            return(
                <div>
                <div className="container">
                    <h1>Weekly Menu:</h1>
                        <ul>
                            <div className="input">
                                <li><label>Monday: </label>{items[0].name}</li>
                            </div>
                            <div className="input">
                                <li><label>Tuesday: </label>{items[1].name}</li>
                            </div>
                            <div className="input">
                                <li><label>Wednesday: </label>{items[2].name}</li>
                            </div>
                            <div className="input">
                                <li><label>Thursday: </label>{items[3].name}</li>
                            </div>
                            <div className="input">
                                <li><label>Friday: </label>{items[4].name}</li>
                            </div>
                            <div className="input">
                                <li><label>Saturday: </label>{items[5].name}</li>
                            </div>
                            <div className="input">
                                <li><label>Sunday: </label>{items[6].name}</li>
                            </div>
                        </ul>
                <div>
                        <button className="generateButton" onClick={onclick}>Generate!</button>
                    </div>
                </div>
            </div>
            );
        }

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
