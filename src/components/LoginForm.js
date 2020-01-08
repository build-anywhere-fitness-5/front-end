import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { StyledImgDiv } from "./StyledImgDiv";
import { StyledLoginSignupContainer } from "./StyledLoginSignupContainer";
import { StyledFormDiv } from "./StyledFormDiv";
import { StyledInput } from "./StyledInput";
import { StyledSignupLoginButton } from "./StyledSignupLoginButton";

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
        <StyledLoginSignupContainer>

            <StyledImgDiv></StyledImgDiv>

            <StyledFormDiv>

            <h1>Log in</h1>

            <form name="login" onSubmit={handleLogin}>
                
                <StyledInput name="email" type="email" placeholder="Email" onChange={handleChange} />
                <p className="formError" id="emailErrors"></p>

                <StyledInput name="password" type="password" placeholder="Password" onChange={handleChange} />
                <p className="formError" id="passwordErrors"></p>

                <StyledSignupLoginButton type="submit">Log In</StyledSignupLoginButton>

            </form>
        
            </StyledFormDiv>
        </StyledLoginSignupContainer>
    )
}

export default withRouter(LoginForm);