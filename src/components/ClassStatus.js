import React, { useEffect } from "react";

import styled from "styled-components";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledIntroText = styled.p`

    font-size: 1.5rem;

`;

// gets a list of all classes from the database
const ClassStatus = () => {

    let totalCategories = undefined;

    useEffect(() => {

        axiosWithAuth()
        .get("https://lambda-anywhere-fitness.herokuapp.com/api/category")
        .then(
            response => {

                totalCategories = response.data.length;

                console.log("connected to database", response, totalCategories);
            }

        )
        .catch(
            response => {

                console.log("database connection error", response);

            }
        )

    }, []);

    let totalClasses = undefined;

    if (totalCategories === undefined)
        {
            return (

                <StyledIntroText>Searching for classes...</StyledIntroText>
            )
        }
    

    return (

        <StyledIntroText>We have {totalCategories} types of classes to choose from. Sign up today!</StyledIntroText>

    )

}

export default ClassStatus;