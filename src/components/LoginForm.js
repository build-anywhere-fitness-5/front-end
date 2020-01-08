import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const LoginForm = ({ history }) => {

    // store user info in state variables
    const [userInfo, setUserInfo] = useState(
        {
            email: "",
            password: ""
        });

    // store error info in state variables
    const [errorInfo, setErrorInfo] = useState(
        {
            emailErrors: [],
            passwordErrors: []
        });


    // update what the user has typed into state upon change
    function handleChange(event) {
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    }

    // validate form fields and POST information to database
    function handleLogin(event) {

        event.preventDefault();

        if (!userInfo.email.match(/^[\w\.-]+@[\w\.-]+.\w+$/))
        {
            const errorMessage = "Not a correctly-formatted email address.";

            setErrorInfo({...errorInfo, email: errorMessage});

            document.getElementById("emailErrors").textContent = errorMessage;

        }

        // if there are no errors, make a POST request to the database
        else
        {
            axios.post("http://www.example.com", userInfo)
            .then(response => {

                console.log("Login status: Database accessed.");

                history.push("/");

                })
            .catch(response => {
                
                console.log("Login status: Error accessing database.");

                history.push("/");
                
                });
        }

    }


    return (
        <>
            <h2>Login</h2>
            <form name="login" onSubmit={handleLogin}>
                
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" onChange={handleChange} />
                <p className="formError" id="emailErrors"></p>

                <label htmlFor="password">Password:</label>
                <input name="password" type="password" onChange={handleChange} />
                <p className="formError" id="passwordErrors"></p>

                <button type="submit">Log In</button>

            </form>
        </>
    )
}

export default withRouter(LoginForm);