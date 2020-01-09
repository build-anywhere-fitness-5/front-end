import React, { useState } from "react";
import { connect } from "react-redux";
import { addPass } from "../../actions/index";

import styled from "styled-components";
import { StyledInput } from "../StyledInput";
import { StyledSignupLoginButton } from "../StyledSignupLoginButton";

const Form = styled.form`
    width: 40vw;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {

        font-size: 1.5rem;
        line-height: 4rem;

        margin-right: 2rem;
    }

    @media (max-width: 1280px)
    {
        max-width: 70vw;

        input, label {

            font-size: 1rem;

            line-height: 2rem;

        }    

    }

    @media (max-width: 1024px)
    {
        max-width: 90vw;

    }

`

const FlexRow = styled.div`

    width: 100%;

    display: flex;
    justify-content: flex-end;

    margin: 0.5rem;

`;


const CreatePass = props => {
  const [newPass, setNewPass] = useState({
    className: "",
    instructor: "",
    client: "",
    classesRemaining: 0
  });

  const handleChanges = e => {
    setNewPass({
      ...newPass,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addPass(newPass);
    props.history.push(`/instructor/`);
  };
  return (
    <div>

      <h1>Create Pass</h1>

      <Form>
        <FlexRow>
          <label htmlFor="className">Pass Name</label>
          <StyledInput
            type="text"
            name="className"
            value={newPass.className}
            id="className"
            onChange={handleChanges}
        />
        </FlexRow>
        <FlexRow>
          <label htmlFor="instructor">Instructor</label>
          <StyledInput
            type="text"
            name="instructor"
            value={newPass.instructor}
            id="instructor"
            onChange={handleChanges}
          />
        </FlexRow>
        <FlexRow>
          <label htmlFor="client">Client</label>
          <StyledInput
            type="text"
            name="client"
            value={newPass.client}
            id="client"
            onChange={handleChanges}
          />
        </FlexRow>
        <FlexRow>
          <label htmlFor="classesRemaining">Classes Remaining</label>
          <StyledInput
            type="number"
            name="classesRemaining"
            value={newPass.classesRemaining}
            id="classesRemaining"
            onChange={handleChanges}
          />
        </FlexRow>

        <StyledSignupLoginButton onClick={handleSubmit}>Create Pass</StyledSignupLoginButton>
      </Form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    addPass: state.addPass
  };
};
export default connect(mapStateToProps, { addPass })(CreatePass);
