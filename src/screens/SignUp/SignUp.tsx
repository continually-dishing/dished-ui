import React from 'react'
import TextInput from '../../components/TextInput/TextInput';
import './SignUp.css'
import Button from '../../components/Button/Button';


function onSignUpClick() {
    alert('sign up!')
}

export default function SignUp() {
    return (
        <>
        <div className='sign-up-container'>
            <h2 className='sign-up-header'>Sign Up</h2>
            <h3 className='lower-header'>Start dishing today!</h3>
            <TextInput marginTop='10px' borderColor='red' width='100px' placeHolder='First Name' />
            <TextInput marginTop='10px' borderColor='red' width='100px' placeHolder='Last Name' /><br/>
            <TextInput borderColor='red' width='200px' placeHolder='Email' /><br/>
            <TextInput borderColor='red' width='200px' placeHolder='Password' /><br/>
            <TextInput borderColor='red' width='200px' placeHolder='Birthday' /><br/>
                          <Button
                    label='Sign Up'
                    color='#02cf4a'
                    fontColor="white"
                    width='40%'
                    handleClick={onSignUpClick}
                />
            </div>
        </>
    );
}