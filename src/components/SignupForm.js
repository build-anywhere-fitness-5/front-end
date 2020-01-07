import React, {useState} from "react";

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
                [/[0-9a-zA-Z._]+@+\1.\1/, "Email must be in the format of you@domain.extension"]
            ],
            password: [
                [/[^0-9]+/, "Password must contain a digit."],
                [/[^a-z]+/, "Password must contain a lowercase letter."],
                [/[^A-Z]+/, "Password must an lowercase letter."],
                [/[^0-9a-zA-Z]+/, "Password must contain non-alphanumeric characters."],
                [/.{8,}/, "Password must be longer than 8 characters."]
            ],
            instructorCode: [
                [/^123$/, "Invalid instructor code."]
            ],
        }

         // filter errors by checking each input against the specified regex expression
         // keep the ones that don't match
        function findErrors(category) {

            // let input = userInfo[category];

            // after filtering, map over arrays and keep only the error messages
            let errorsFound = criteria[category].filter(errorType => !userInfo[category].match(errorType[0]) ).map(errorType => errorType[1]);

            console.log(errorsFound);

            setErrorInfo({...errorInfo, [category]: errorsFound});
        }

        findErrors("firstName");
        findErrors("lastName");
        findErrors("email");
        findErrors("password");

        if (role === "instructor")
            { findErrors("instructorCode"); }

        console.log(errorInfo);
    
        // document.getElementById("firstNameError").textContent = "First name entered";
        // document.getElementById("lastNameError").textContent = "Last name entered";
        // document.getElementById("passwordError").textContent = "Password entered";
        // document.getElementById("emailError").textContent = "Email entered";
        // document.getElementById("passwordError").textContent = "Password entered";

        // if (role == "instructor")
        //     {
        //         document.getElementById("instructorCodeError").textContent = "Instructor Code entered";
        //     }
    
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