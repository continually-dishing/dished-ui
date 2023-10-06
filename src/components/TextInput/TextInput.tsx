import React from 'react'
import PropTypes from 'prop-types'

interface TextInputProps {
    type?: string,
    borderColor: string,
    fontColor?: string,
    width: string,
    placeHolder: string,
    marginTop? : string,
}


export default function TextInput({ type, borderColor, fontColor, width, placeHolder, marginTop }: TextInputProps) {

    const myStyles = {
        border: borderColor,
        color: fontColor,
        width: width,
        marginTop: marginTop
    }

    return (
        <input id='general-button' type={type} style={myStyles} placeholder={placeHolder} />
    );

}

TextInput.propTypes = {
    handleClick: PropTypes.func
}

