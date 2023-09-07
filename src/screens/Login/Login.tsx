import React from "react";
import './Login.css'

export default function Login() {

    return (
        <div className="login-container">
            <label className="username"><strong>Username:</strong></label><br />
            <input type="text" placeholder="Enter Username" className='username-input' required /><br />
            <label className="password"><strong>Password:</strong></label><br />
            <input type="password" placeholder="Enter Password" className="password-input" required /><br />
            <button className='login-button' type="submit">Login</button>
            <label>
                <input type="checkbox" className='remember-me-input' />
                Remember Me
            </label><br />
            <div className="login-lower-controls">
                <button className="cancle-button">Cancle</button>
                <label className="forgot-password-link"><a href="facebook.com">Forgot password?</a></label>
            </div>
        </div>
    );
}