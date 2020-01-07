import React, {useState} from "react";

const SignupForm = ({role}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    function handleSignup(event) {
    
        event.preventDefault();
    
        document.getElementById("firstNameError").textContent = "First name entered";
        document.getElementById("lastNameError").textContent = "Last name entered";
        document.getElementById("passwordError").textContent = "Password entered";
        document.getElementById("emailError").textContent = "Email entered";
        document.getElementById("passwordError").textContent = "Password entered";

        if (role == "instructor")
            {
                document.getElementById("instructorCodeError").textContent = "Instructor Code entered";
            }
    
        // setUsername()
    
    }
    

    const signupWelcomeText = "Sign up as " + ((role === "instructor") ? "an instructor" : "a client");

    return (
        <>
            <h2>{signupWelcomeText}</h2>

            <form name="login" onSubmit={handleSignup}>
                
                <label htmlFor="firstName">First Name:</label>
                <input name="firstName" type="text" />
                <p className="formError" id="firstNameError"></p>

                <label htmlFor="lastName">Last Name:</label>
                <input name="lastName" type="text" />
                <p className="formError" id="lastNameError"></p>

                <label htmlFor="Email">Email:</label>
                <input name="email" type="text" />
                <p className="formError" id="emailError"></p>

                <label htmlFor="Password">Password:</label>
                <input name="password" type="password" />
                <p className="formError" id="passwordError"></p>

                {/* Show input for instructor code if user is an instructor */}
                {
                    (role === "instructor") &&
                    (
                        <>
                            <label htmlFor="instructorCode">Instructor Code:</label>
                            <input name="instructorCode" type="text" />
                            <p className="formError" id="instructorCodeError"></p>
                        </>
                    )
                }

                <button type="submit">Sign Up</button>

            </form>
        </>
    )
}

export default SignupForm;