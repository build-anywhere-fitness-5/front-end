import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import {StyledSignupLoginButton } from "./StyledSignupLoginButton";

const ButtonSeparatorDiv = styled.div`

    margin: 5vh auto;

`;


const SignupLoginButton = ({text, url}) => {

    return (
        
        <ButtonSeparatorDiv>

        <Link to={url}>
            <StyledSignupLoginButton>{text}</StyledSignupLoginButton>
        </Link>

        </ButtonSeparatorDiv>

    )

}

export default SignupLoginButton;