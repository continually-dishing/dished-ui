import React from "react";
import './MenuGenerator.css';
import Button from '../../components/Button/Button'
//import WeeklyMenu from '../../components/WeekView/WeekView'
//import MonthlyMenu from '../../components/MonthView/MonthView'


export default function MenuView() {

    function onWeekClick() {
        window.location.href = 'weeklyMenu';
    }

    return (
        <>
            <div className='container-weekly'>
                <p>Generate a weeks worth of meals here!</p>
                <Button
                    width="70%"

                    fontColor='white'
                    color='yellow'
                    label='Generate a month of food!'
                    handleClick={() => onWeekClick()}
                />
            </div>
            <div className='container-monthly'>

            </div>
        </>
    );


}
