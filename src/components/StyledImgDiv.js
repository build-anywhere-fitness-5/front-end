import React from "react";

import girlImg from "../images/girl.jpg";
import styled from "styled-components";

export const StyledImgDiv = styled.div`

    background-color: #333333;
    background-image: url(${girlImg});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;

    width: 50vw;
    height: 95vh;

`;