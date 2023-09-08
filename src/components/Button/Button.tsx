import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

interface ButtonProps {
    label: string,
    handleClick: () => void,
    color: string,
    fontColor: string,
    width: string,
}


function Button({ handleClick, label, color, fontColor, width }: ButtonProps) {

    const myStyles = {
        backgroundColor: color,
        color: fontColor,
        width: width,

    }

    return (
        <button id='general-button' onClick={handleClick} style={myStyles}> {label}</button >
    );

}

Button.propTypes = {
    handleClick: PropTypes.func
}

export default Button