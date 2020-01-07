import React from "react";
import { Link } from "react-router-dom";

const SignupLoginButton = ({text, url}) => {

    return (
        
        <Link to={url}>{text}</Link>

    )

}

export default SignupLoginButton;