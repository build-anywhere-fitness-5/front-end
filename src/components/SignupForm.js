import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { StyledImgDiv } from "./StyledImgDiv";
import { StyledLoginSignupContainer } from "./StyledLoginSignupContainer";
import { StyledFormDiv } from "./StyledFormDiv";
import { StyledInput } from "./StyledInput";
import { StyledSignupLoginButton } from "./StyledSignupLoginButton";

const SignupForm = ({role, history}) => {

    // store user info in state variables
    const [userInfo, setUserInfo] = useState(
        {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            instructorCode: "",
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
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    }

    // validate form fields and POST information to database
    function handleSignup(event) {
    
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

            // let input = userInfo[category];

            // after filtering, map over arrays and keep the fields that don't match the regex
            // then keep only the messages
            let errorsFound = criteria[category].filter(errorType => !userInfo[category].match(errorType[0]) ).map(errorType => errorType[1]);

            // keep track of error so that no database request is made if there is an error
            inputsHaveErrors = true;

            // display error messages to user
            document.getElementById(category + "Errors").innerHTML = errorsFound.join("<br>");

            // store error info in state
            setErrorInfo({...errorInfo, [category]: errorsFound});
        }

        findErrors("username");
        findErrors("firstName");
        findErrors("lastName");
        findErrors("email");
        findErrors("password");

        if (role === "instructor")
            { findErrors("instructorCode"); }

        // if there are no errors, make a POST request to the database
        if (!inputsHaveErrors)
        {
            axios.post("https://github.com/build-week-apis/anywhere-fitness/api/auth", userInfo)
            .then(response => {

                console.log("Signup status: Database accessed.");
                console.log("Errors received from database: ", response.message);

                if (response.message === "Username is already taken")
                    {
                        setErrorInfo({ ...errorInfo, signupErrors: response.message});
                    }
                else
                    {
                        // get user roleId (instructor is 1, client is 2) and redirect to either instructor or client dashboard
                        if (userInfo.roleId === 1)
                            { history.push("/instructor"); }

                        else if (userInfo.roleId === 2)
                            { history.push("/client"); }

                    }

                })
            .catch(response => {
                
                console.log("Couldn't access database.");

                setErrorInfo({ ...errorInfo, signupErrors: "Couldn't access database."});

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
                
                <StyledInput name="username" type="text" placeholder="Username" onChange={handleChange} />
                <p className="formError" id="usernameErrors"></p>

                <StyledInput name="firstName" type="text" placeholder="First name" onChange={handleChange} />
                <p className="formError" id="firstNameErrors"></p>

                <StyledInput name="lastName" type="text" placeholder="Last name" onChange={handleChange} />
                <p className="formError" id="lastNameErrors"></p>

                <StyledInput name="email" type="email" placeholder="Email" onChange={handleChange} />
                <p className="formError" id="emailErrors"></p>

                <StyledInput name="password" type="password" placeholder="Password" onChange={handleChange} />
                <p className="formError" id="passwordErrors"></p>

                {/* Show input for instructor code if user is an instructor */}
                {
                    (role === "instructor") &&
                    (
                        <>
                            <StyledInput name="instructorCode" type="text" placeholder="Instructor code" onChange={handleChange} />
                            <p className="formError" id="instructorCodeErrors"></p>
                        </>
                    )
                }

                <StyledSignupLoginButton type="submit">Sign Up</StyledSignupLoginButton>

            </form>
        
            </StyledFormDiv>
        </StyledLoginSignupContainer>

    )
}

export default withRouter(SignupForm);