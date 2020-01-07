import React, {useState} from "react";


const LoginForm = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    function handleLogin(event) {
    
        event.preventDefault();
    
        document.getElementById("emailError").textContent = "Email entered";
        document.getElementById("passwordError").textContent = "Password entered";
    
        // setUsername()
    
    }
    

    return (
        <>
            <h2>Login</h2>
            <form name="login" onSubmit={handleLogin}>
                
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" />
                <p className="formError" id="emailError"></p>

                <label htmlFor="password">Password:</label>
                <input name="password" type="password" />
                <p className="formError" id="passwordError"></p>

                <button type="submit">Log In</button>

            </form>
        </>
    )
}

export default LoginForm;