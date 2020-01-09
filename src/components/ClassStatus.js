import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledIntroText = styled.p`

    font-size: 1.5rem;

`;

// gets a list of all classes from the database
const ClassStatus = () => {

    const [totalCategories, setTotalCategories] = useState(undefined);

    useEffect(() => {

        axiosWithAuth()
        .get("https://lambda-anywhere-fitness.herokuapp.com/api/category")
        .then(
            response => {

                console.log("Here is the response for categories:", response, response.data.length);
                setTotalCategories(response.data.length);
            }
        )
        .catch(
            response => { console.log("Couldn't get the total number of classes from the database.", response); }
        )

    }, []);

    if (totalCategories === undefined)
        {
            return (<StyledIntroText>{"Searching for classes..."}</StyledIntroText>);
        }

    return (<StyledIntroText>{"We have " + totalCategories + " types of classes available."}</StyledIntroText>);

}

export default ClassStatus;