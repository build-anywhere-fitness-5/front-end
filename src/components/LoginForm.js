import React, {useState} from "react";


const LoginForm = () => {

    // store user info in state variables
    const [userInfo, setUserInfo] = useState(
        {
            email: "",
            password: ""
        });
    
    // update what the user has typed into state upon change
    function handleChange(event) {
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    }

    function handleLogin(event) {

        event.preventDefault();

        console.log("Logging in with", userInfo);

    }


    return (
        <>
            <h2>Login</h2>
            <form name="login" onSubmit={handleLogin}>
                
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" onChange={handleChange} />
                <p className="formError" id="emailError"></p>

                <label htmlFor="password">Password:</label>
                <input name="password" type="password" onChange={handleChange} />
                <p className="formError" id="passwordError"></p>

                <button type="submit">Log In</button>

            </form>
        </>
    )
}

export default LoginForm;