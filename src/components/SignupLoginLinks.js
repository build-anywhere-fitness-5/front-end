import React from "react";

import SignupLoginButton from "./SignupLoginButton";

const SignupLoginLinks = () => {
    return (
        <>
            <SignupLoginButton text="Register as a Client" url="/signup/client"></SignupLoginButton>
            <SignupLoginButton text="Register as an Instructor" url="/signup/instructor"></SignupLoginButton>

            <SignupLoginButton text="Log In" url="/login"></SignupLoginButton>
        </>

    )
}

export default SignupLoginLinks;