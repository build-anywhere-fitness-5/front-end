import React, {useState, useEffect} from "react";
import axios from "axios";

const SignupForm = ({role}) => {

    // store user info in state variables
    const [userInfo, setUserInfo] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            instructorCode: "",
        });
    
    // store error info in state variables
    const [errorInfo, setErrorInfo] = useState(
        {
            firstNameErrors: [],
            lastNameErrors: [],
            emailErrors: [],
            passwordErrors: [],
            instructorCodeErrors: [],
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
            firstName: [
                [/^[a-zA-Z]+$/, "First name must consist of letters only."],
                [/.{2,}/, "First name must be longer than 2 letters."]
            ],
            lastName: [
                [/^[a-zA-Z]+$/, "Last name must consist of letters only."],
                [/.{2,}/, "Last name must be longer than 2 letters."]
            ],
            email: [
                [/^[\w\.-]+@[\w\.-]+.\w+$/, "Email must be in the format of you@domain.extension"]
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

        findErrors("firstName");
        findErrors("lastName");
        findErrors("email");
        findErrors("password");

        if (role === "instructor")
            { findErrors("instructorCode"); }

        // if there are no errors, make a POST request to the database
        if (!inputsHaveErrors)
        {
            axios.post("http://example.com", userInfo)
            .then(respone => console.log("User info successfully added to database."))
            .catch(respone => console.log("There was an error adding the user info to the database."));
        }
    
    }
    
    const signupWelcomeText = "Sign up as " + ((role === "instructor") ? "an instructor" : "a client");

    return (
        <>
            <h2>{signupWelcomeText}</h2>

            <form name="login" onSubmit={handleSignup}>
                
                <label htmlFor="firstName">First Name:</label>
                <input name="firstName" type="text" onChange={handleChange} />
                <p className="formError" id="firstNameErrors"></p>

                <label htmlFor="lastName">Last Name:</label>
                <input name="lastName" type="text" onChange={handleChange} />
                <p className="formError" id="lastNameErrors"></p>

                <label htmlFor="Email">Email:</label>
                <input name="email" type="text" onChange={handleChange} />
                <p className="formError" id="emailErrors"></p>

                <label htmlFor="Password">Password:</label>
                <input name="password" type="password" onChange={handleChange} />
                <p className="formError" id="passwordErrors"></p>

                {/* Show input for instructor code if user is an instructor */}
                {
                    (role === "instructor") &&
                    (
                        <>
                            <label htmlFor="instructorCode">Instructor Code:</label>
                            <input name="instructorCode" type="text" onChange={handleChange} />
                            <p className="formError" id="instructorCodeErrors"></p>
                        </>
                    )
                }

                <button type="submit">Sign Up</button>

            </form>
        </>
    )
}

export default SignupForm;