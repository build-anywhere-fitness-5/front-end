import React from "react";

import SignupLoginButton from "./SignupLoginButton";

import { StyledImgDiv } from "./StyledImgDiv";
import { StyledLoginSignupContainer } from "./StyledLoginSignupContainer";
import { StyledFormDiv } from "./StyledFormDiv";

const SignupLoginLinks = () => { 
    return (
        <StyledLoginSignupContainer>

            <StyledImgDiv></StyledImgDiv>

            <StyledFormDiv>

            <h1>Welcome to Anywhere Fitness!</h1>

            <SignupLoginButton text="Sign up as a client" url="/signup/client"></SignupLoginButton>
            <SignupLoginButton text="Sign up as an instructor" url="/signup/instructor"></SignupLoginButton>

            <SignupLoginButton text="Log in" url="/login"></SignupLoginButton>

            </StyledFormDiv>
        </StyledLoginSignupContainer>

    )
}

export default SignupLoginLinks;