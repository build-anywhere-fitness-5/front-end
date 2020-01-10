import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledIntroText = styled.p`

    font-weight: bold;

`;

// gets a list of all classes from the database
const ClassStatus = () => {

    const [totalCategories, setTotalCategories] = useState(undefined);

    useEffect(() => {

        axiosWithAuth()
        .get("https://lambda-anywhere-fitness.herokuapp.com/api/category")
        .then(
            response => {

                console.log("Database response:", response);
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

    return (<StyledIntroText>{"Browse all the classes from " + totalCategories + " different categories, or search to narrow down your selection."}</StyledIntroText>);

}

export default ClassStatus;