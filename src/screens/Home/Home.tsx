import React, { useState } from "react";
import './Home.css';
import Login from "../Login/Login";

function Home() {

    const [loginModalVisable, isLoginModalVisable] = useState(true)

    return (
        <>

            <h3>Prep</h3>
            <h3>Preserve</h3>
            <h3>Propose</h3>
            <div>
                <button onClick={() => isLoginModalVisable(!loginModalVisable)}>Login</button>
                <button>Sign Up</button>
                {loginModalVisable && (
                    <Login />
                )}
            </div>
        </>
    );
}
export default Home;