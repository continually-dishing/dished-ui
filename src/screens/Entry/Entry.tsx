import React from "react";
import './Entry.css'
import Button from "../../components/Button/Button";
import EntryImages from "../../components/EntryImages/EntryImages";
import { useNavigate } from "react-router-dom";

interface EntryPointProps {
    validLogin?: (x: boolean) => void
}


export default function EntryPoint({ validLogin }: EntryPointProps) {
    const navigate = useNavigate();


    function onLoginClick() {
        navigate('/login')
        console.log(validLogin)
    }

    function OnSignUpClick() {
        navigate('/signup')
    }
    return (
        <div className="entry-container">

            <h1 className="entry-header">Dished</h1>
            <EntryImages />

            <div className="controls-container">
                <Button
                    label='Sign Up'
                    color='#4C31DF'
                    fontColor="white"
                    width='70%'

                    handleClick={OnSignUpClick}
                />
                <Button
                    label='Login'
                    width='70%'
                    color='#4C31DF'
                    fontColor="white"
                    handleClick={onLoginClick}
                />

            </div>
        </div>
    );
}