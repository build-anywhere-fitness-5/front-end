import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import OnboardingQuestion from "./OnboardingQuestion";

const StyledOnboardingDiv = styled.div`

    height: 95vh;
    width: 100vw;

    background-color: #333333;

    div {
        max-width: 1000px;

        margin: 0 auto;

        padding: 5vh 0;

        h1 {
            

            color: #EAE9E7;
        }

        p {
            width: 50%;
            margin: 1rem auto; 

            font-size: 1.5rem;
            color: #EAE9E7;
        }

        a {
            font-size: 1.25rem;
        }
    }
`;

const Onboarding = ({userChoices, step}) => {

    let questions = [

        {
            questionId: 1,
            choices: ["a", "b", "c"]
        },

        {
            questionId: 1,
            choices: ["a", "b", "c"]
        },

        {
            questionId: 1,
            choices: ["a", "b", "c"]
        },

        {
            questionId: 1,
            choices: ["a", "b", "c"]
        },

        {
            questionId: 1,
            choices: ["a", "b", "c"]
        }

    ]

    return (

        <StyledOnboardingDiv>

            <div>
                <h1>Welcome to Anywhere Fitness!</h1>

                <p>To help you find the classes you're interested in, please take this optional survey before we bring you to the user dashboard.</p>

                <Link to="/client">Skip</Link>
                
                <OnboardingQuestion questions={questions} questionId={1}></OnboardingQuestion>

            </div>


        </StyledOnboardingDiv>
    )

}

export default Onboarding;