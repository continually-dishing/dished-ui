import React from "react";
import './MenuGenerator.css';
import Button  from '../../components/Button/Button'
//import WeeklyMenu from '../../components/WeekView/WeekView'
//import MonthlyMenu from '../../components/MonthView/MonthView'


export default function MenuView() {
    
function onWeekClick () {
    location.href='weeklyMenu';
}

        return (
            <>
            <div className='container-weekly'>
                <p>Generate a weeks worth of meals here!</p>
            <Button
            handleClick={() => onWeekClick()}
            />
            </div>
            <div className='container-monthly'>
                <p>Busy this month? Generate a month worth of meals here and eliminate stress!</p>
             <Button/>
            </div>
            </>
        );
    

}
