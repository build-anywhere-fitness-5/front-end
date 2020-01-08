import React, {useState, useEffect} from "react";
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
            username: "",
            password: ""
        });

    // store error info in state variables
    const [errorInfo, setErrorInfo] = useState(
        {
            usernameErrors: [],
            passwordErrors: [],
            loginErrors: []
        });


    // update what the user has typed into state upon change
    function handleChange(event) {
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    }

    // validate form fields and POST information to database
    function handleLogin(event) {

        event.preventDefault();

        // if there are no errors, make a POST request to the database
        // useEffect(() => 
        // {
            axios.post("https://github.com/build-week-apis/anywhere-fitness/api/auth/login", userInfo)
            .then(response => {

                console.log("Login status: Database accessed.");
                console.log("Errors received from database: ", response.message);

                if (response.message === "Username is not in the system." || response.message === "Incorrect Password")
                    {
                        setErrorInfo({ ...errorInfo, loginErrors: response.message});
                    }
                else
                    {
                        // get user roleId (instructor is 1, client is 2) and redirect to either instructor or client dashboard
                        let roleId = 1;

                        if (roleId === 1)
                            { history.push("/instructor"); }

                        else if (roleId === 2)
                            { history.push("/client"); }

                    }

                })
            .catch(response => {
                
                console.log("Couldn't access database.");

                setErrorInfo({ ...errorInfo, loginErrors: "Couldn't access database."});

                });
        // }, []);

    }


    return (
        <StyledLoginSignupContainer>

            <StyledImgDiv></StyledImgDiv>

            <StyledFormDiv>

            <h1>Log in</h1>

            <form name="login" onSubmit={handleLogin}>
                
                <StyledInput name="username" type="text" placeholder="Username" onChange={handleChange} />
                <p className="formError" id="usernameErrors"></p>

                <StyledInput name="password" type="password" placeholder="Password" onChange={handleChange} />
                <p className="formError" id="passwordErrors"></p>

                <StyledSignupLoginButton type="submit">Log In</StyledSignupLoginButton>

            </form>
        
            </StyledFormDiv>
        </StyledLoginSignupContainer>
    )
}

export default withRouter(LoginForm);