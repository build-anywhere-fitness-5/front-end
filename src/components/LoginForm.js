import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';

import { StyledImgDiv } from "./StyledImgDiv";
import { StyledLoginSignupContainer } from "./StyledLoginSignupContainer";
import { StyledFormDiv } from "./StyledFormDiv";
import { StyledInput } from "./StyledInput";
import { StyledSignupLoginButton } from "./StyledSignupLoginButton";

import { addUser } from '../actions/index';

const LoginForm = props => {

    let history = useHistory();

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
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }

    // validate form fields and POST information to database
    function handleLogin(event) {

        event.preventDefault();

        // make a POST request to the database

        axios.post("https://lambda-anywhere-fitness.herokuapp.com/api/auth/login", userInfo)
            .then(response => {

                console.log("Login status: Database accessed.");
                console.log("Errors received from database: ", response);

                if (response.message === "Username is not in the system.") {
                    // update error message to display to user
                }
                else if (response.message === "Incorrect Password") {
                    // update error message to display to user
                    // setErrorInfo({ ...errorInfo, loginErrors: response.message});
                }
                else {
                    // get authentication token
                    // get user roleId (instructor is 1, client is 2) and redirect to either instructor or client dashboard
                    axios.post("https://lambda-anywhere-fitness.herokuapp.com/api/auth/login", { username: userInfo.username, password: userInfo.password })
                        .then(loginResponse => {
                            sessionStorage.setItem("token", loginResponse.data.token);
                            props.addUser(loginResponse.data.user);
                            console.log(loginResponse);

                            if (props.user.roleId === 1) { history.push("/instructor"); }

                            else if (props.user.roleId === 2) { history.push("/client"); }
                        })

                    let roleId = 1;

                    if (roleId === 1) { history.push("/instructor"); }

                    else if (roleId === 2) { history.push("/client"); }

                }

            })
            .catch(response => {

                console.log("Couldn't access database: ", response);

                // setErrorInfo({ ...errorInfo, loginErrors: "Couldn't access database."});

            });

    }


    // format errors for display
    // console.log("errorInfo:", errorInfo.loginErrors.length, errorInfo)
    let formattedErrors = "";
    // let formattedErrors = (errorInfo.loginErrors.length > 1) ? errorInfo.loginErrors.join("<br>") : "";

    return (
        <StyledLoginSignupContainer>

            <StyledImgDiv></StyledImgDiv>

            <StyledFormDiv>

                <h1>Log in</h1>

                <form name="login" onSubmit={handleLogin}>

                    <StyledInput name="username" type="text" placeholder="Username" value={userInfo.username} onChange={handleChange} />
                    <p className="formError" id="usernameErrors"></p>

                    <StyledInput name="password" type="password" placeholder="Password" value={userInfo.password} onChange={handleChange} />
                    <p className="formError" id="passwordErrors"></p>

                    <StyledSignupLoginButton type="submit">Log In</StyledSignupLoginButton>

                </form>

                {/* <p className="loginErrors" id="loginErrors">{formattedErrors}</p> */}
                <p>
                    Upon logging in, all users will redirect to the instructor dashboard for now.
            </p>

            </StyledFormDiv>
        </StyledLoginSignupContainer>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addUser })(LoginForm);