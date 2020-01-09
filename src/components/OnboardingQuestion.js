import React from "react";

const OnboardingQuestion = ({questions, questionId}) => {

    return (

        <>
            <h1>Question {questionId} / 5</h1>

            <p>
                {questions.map(value => value)}

            </p>
        </>
    )

}

export default OnboardingQuestion;