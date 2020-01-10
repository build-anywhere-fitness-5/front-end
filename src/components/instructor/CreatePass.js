import React, { useState } from "react";
import { connect } from "react-redux";
import { addPass } from "../../actions/index";
import { StyledInput } from "../StyledInput";
import { StyledSignupLoginButton } from "../StyledSignupLoginButton";

import './CreateFormStyles.css';

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

      <form className="createForm">
        <div>
          <label htmlFor="className">Pass Name</label>
          <StyledInput
            type="text"
            name="className"
            value={newPass.className}
            id="className"
            onChange={handleChanges}
        />
        </div>
        <div>
          <label htmlFor="instructor">Instructor</label>
          <StyledInput
            type="text"
            name="instructor"
            value={newPass.instructor}
            id="instructor"
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="client">Client</label>
          <StyledInput
            type="text"
            name="client"
            value={newPass.client}
            id="client"
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="classesRemaining">Classes Remaining</label>
          <StyledInput
            type="number"
            name="classesRemaining"
            value={newPass.classesRemaining}
            id="classesRemaining"
            onChange={handleChanges}
          />
        </div>

        <StyledSignupLoginButton onClick={handleSubmit}>Create Pass</StyledSignupLoginButton>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    addPass: state.addPass
  };
};
export default connect(mapStateToProps, { addPass })(CreatePass);
