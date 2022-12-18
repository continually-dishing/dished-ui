import React from "react";
import './WeekView.css'

function onclick(){
    alert("Button clicked!")    
}

export default function WeekView () {

        return(
            <div>
                <div className="container">
                <ul>
                    <li>Monday:
                    <input className="input"></input>
                    </li>
                    <li>Tuesday:
                    <input className="input"></input>
                    </li>
                    <li>Wednesday:
                    <input className="input"></input>
                    </li>
                    <li>Thursday:
                    <input className="input"></input>
                    </li>
                    <li>Friday:
                    <input className="input"></input>
                    </li>
                    <li>Saturday:
                    <input className="input"></input>
                    </li>
                    <li>Sunday:
                    <input className="input"></input>
                    </li>
                </ul>
                <button className="generateButton" onClick={onclick}>Generate!</button>
            </div>
        </div>
        );
}