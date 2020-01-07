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
    
    // update what the user has typed into state upon change
    function handleChange(event) {
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    }

    // validate form fields and POST information to database
    function handleSignup(event) {
    
        event.preventDefault();

        console.log(userInfo);
    
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
                <input name="firstName" type="text" onChange={handleChange} />
                <p className="formError" id="firstNameError"></p>

                <label htmlFor="lastName">Last Name:</label>
                <input name="lastName" type="text" onChange={handleChange} />
                <p className="formError" id="lastNameError"></p>

                <label htmlFor="Email">Email:</label>
                <input name="email" type="text" onChange={handleChange} />
                <p className="formError" id="emailError"></p>

                <label htmlFor="Password">Password:</label>
                <input name="password" type="password" onChange={handleChange} />
                <p className="formError" id="passwordError"></p>

                {/* Show input for instructor code if user is an instructor */}
                {
                    (role === "instructor") &&
                    (
                        <>
                            <label htmlFor="instructorCode">Instructor Code:</label>
                            <input name="instructorCode" type="text" onChange={handleChange} />
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