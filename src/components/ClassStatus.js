import React, { useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

const StyledIntroText = styled.p`

    font-size: 1.25rem;

`;

const ClassStatus = () => {

    useEffect(() => {

        axios.get("https://lambda-anywhere-fitness.herokuapp.com/api/category")
        .then(
            response => {

                console.log("connected to database", response);
            }

        )
        .catch(
            response => {

                console.log("database connection error", response);

            }
        )

    }, []);

    let totalClasses = 1000;

    return (

        <StyledIntroText>We have {totalClasses} types of classes to choose from. Sign up today!</StyledIntroText>

    )

}

export default ClassStatus;