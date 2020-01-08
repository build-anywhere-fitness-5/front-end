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

const SignupForm = props => {

    let history = useHistory();
    const role = props.role

    const nameList = "Michael Christopher Matthew Joshua Jacob Nicholas Andrew Daniel Tyler Joseph Brandon David James Ryan John Zachary Justin William Anthony Robert Jessica Ashley Emily Sarah Samantha Amanda Brittany Elizabeth Taylor Megan Hannah Kayla Lauren Stephanie Rachel Jennifer Nicole Alexis Victoria Amber".split(" ");
    const randFirstName = nameList[Math.floor(Math.random() * nameList.length)];

    const letters = "ABCDEEFGHIJKLMNOPQRSTUVWXYZ";
    const randLastName = letters[Math.floor(Math.random() * letters.length)] + ".";

    // store user info in state variables
    const [userInfo, setUserInfo] = useState(
        {
            username: role + (Math.floor(Math.random() * 100)),
            firstName: randFirstName,
            lastName: randLastName,
            email: (role === "instructor") ? randFirstName.toLowerCase() + "@fitnessanywhere.com" : randFirstName.toLowerCase() + "." + randLastName[0].toLowerCase() + "@gmail.com",
            password: "password",
            instructorCode: "123",
            roleId: (role === "instructor") ? 1 : 2
        });

    // store error info in state variables
    const [errorInfo, setErrorInfo] = useState(
        {
            usernameErrors: [],
            firstNameErrors: [],
            lastNameErrors: [],
            emailErrors: [],
            passwordErrors: [],
            instructorCodeErrors: [],
            signupErrors: []
        });


    // update what the user has typed into state upon change
    function handleChange(event) {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }

    // validate form fields and POST information to database
    function handleSignup(event) {

        console.log("button clicked");

        event.preventDefault();

        // set up criteria for valid form input
        const criteria = {
            username: [
                [/^[\w]+$/, "Username must only contain alphanumeric characters."],
                [/.{2,}/, "Username must be longer than 2 letters."]
            ],
            firstName: [
                [/^[a-zA-Z]+$/, "First name must consist of letters only."],
                [/.{2,}/, "First name must be longer than 2 letters."]
            ],
            lastName: [
                [/^[a-zA-Z]+$/, "Last name must consist of letters only."],
                [/.{2,}/, "Last name must be longer than 2 letters."]
            ],
            email: [
                [/^[\w.-]+@[\w.-]+.\w+$/, "Email must be in the format of you@domain.extension"]
            ],
            password: [
                [/(?=[0-9])/, "Password must contain a digit."],
                [/(?=[a-z])/, "Password must contain a lowercase letter."],
                [/(?=[A-Z])/, "Password must an uppercase letter."],
                [/(?=[^0-9a-zA-Z])/, "Password must contain non-alphanumeric characters."],
                [/.{8,}/, "Password must be longer than 8 characters."]
            ],
            instructorCode: [
                [/^123$/, "Invalid instructor code."]
            ],
        }

        // keep track of whether errors have occured
        let inputsHaveErrors = false;

        // filter errors by checking each input against the specified regex expression
        function findErrors(category) {

            // after filtering, map over arrays and keep the fields that don't match the regex
            // then keep only the messages
            let errorsFound = criteria[category].filter(errorType => !userInfo[category].match(errorType[0])).map(errorType => errorType[1]);

            // keep track of error so that no database request is made if there is an error
            inputsHaveErrors = true;

            // display error messages to user
            document.getElementById(category + "Errors").innerHTML = errorsFound.join("<br>");

            // store error info in state
            setErrorInfo({ ...errorInfo, [category]: errorsFound });

            console.log(errorInfo);
        }

        findErrors("username");
        findErrors("firstName");
        findErrors("lastName");
        findErrors("email");
        findErrors("password");

        if (role === "instructor") { findErrors("instructorCode"); }

        console.log("errors?", inputsHaveErrors, errorInfo);

        // if there are no errors, make a POST request to the database
        // if (!inputsHaveErrors)
        if (1) {
            console.log("Attempting to connect to database...");
            console.log("Note: if username is taken, you will get a 400 response code.")

            axios.post("https://lambda-anywhere-fitness.herokuapp.com/api/auth/register", { username: userInfo.username, password: userInfo.password, roleId: userInfo.roleId })

                .then(response => {

                    axios.post("https://lambda-anywhere-fitness.herokuapp.com/api/auth/login", { username: userInfo.username, password: userInfo.password, roleId: userInfo.roleId })
                        .then(loginResponse => {
                            sessionStorage.setItem("token", loginResponse.data.token);
                            sessionStorage.setItem("roleId", loginResponse.data.user.roleId);

                            props.addUser(loginResponse.data.user);
                            console.log(loginResponse);


                            if (props.user.roleId === 1) { history.push("/instructor"); }

                            else if (props.user.roleId === 2) { history.push("/client"); }

                        }
                        )

                    console.log("Signup status: Database accessed.");
                    console.log("Messages received from database: ", response, response);

                    // not working right now
                    if (response.message === "Username is already taken") {
                        console.log("Username is already taken", response);
                        setErrorInfo({ ...errorInfo, signupErrors: response });
                    }
                    else {
                        // get user roleId (instructor is 1, client is 2) and redirect to either instructor or client dashboard
                        if (userInfo.roleId === 1) { history.push("/instructor"); }

                        else if (userInfo.roleId === 2) { history.push("/client"); }

                    }

                })
                .catch(response => {

                    console.log("Couldn't access database.", response, response.message);

                    setErrorInfo({ ...errorInfo, signupErrors: "Couldn't access database." });

                });
        }

    }

    const signupWelcomeText = "Sign up as " + ((role === "instructor") ? "an instructor" : "a client");

    return (
        <StyledLoginSignupContainer>

            <StyledImgDiv></StyledImgDiv>

            <StyledFormDiv>

                <h1>{signupWelcomeText}</h1>

                <form name="login" onSubmit={handleSignup}>

                    <StyledInput name="username" type="text" placeholder="Username" value={userInfo.username} onChange={handleChange} />
                    <p className="formError" id="usernameErrors"></p>

                    <StyledInput name="firstName" type="text" placeholder="First name" value={userInfo.firstName} onChange={handleChange} />
                    <p className="formError" id="firstNameErrors"></p>

                    <StyledInput name="lastName" type="text" placeholder="Last name" value={userInfo.lastName} onChange={handleChange} />
                    <p className="formError" id="lastNameErrors"></p>

                    <StyledInput name="email" type="email" placeholder="Email" value={userInfo.email} onChange={handleChange} />
                    <p className="formError" id="emailErrors"></p>

                    <StyledInput name="password" type="password" placeholder="Password" value={userInfo.password} onChange={handleChange} />
                    <p className="formError" id="passwordErrors"></p>

                    {/* Show input for instructor code if user is an instructor */}
                    {
                        (role === "instructor") &&
                        (
                            <>
                                <StyledInput name="instructorCode" type="text" placeholder="Instructor code" value={userInfo.instructorCode} onChange={handleChange} />
                                <p className="formError" id="instructorCodeErrors"></p>
                            </>
                        )
                    }

                    <StyledSignupLoginButton type="submit">Sign Up</StyledSignupLoginButton>

                    <p>
                        Default password is "password".
                </p>

                </form>

            </StyledFormDiv>
        </StyledLoginSignupContainer>

    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addUser })(SignupForm);