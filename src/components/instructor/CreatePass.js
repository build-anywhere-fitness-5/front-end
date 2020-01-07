import React, { useState } from "react";
import { connect } from "react-redux";
import { addPass } from "../../actions/index";

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
      <form>
        <label htmlFor="className">Pass Name</label>
        <input
          type="text"
          name="className"
          value={newPass.className}
          id="className"
          onChange={handleChanges}
        />
        <label htmlFor="instructor">Instructor</label>
        <input
          type="text"
          name="instructor"
          value={newPass.instructor}
          id="instructor"
          onChange={handleChanges}
        />
        <label htmlFor="client">Client</label>
        <input
          type="text"
          name="client"
          value={newPass.client}
          id="client"
          onChange={handleChanges}
        />
        <label htmlFor="classesRemaining">Classes Remaining</label>
        <input
          type="number"
          name="classesRemaining"
          value={newPass.classesRemaining}
          id="classesRemaining"
          onChange={handleChanges}
        />

        <button onClick={handleSubmit}>Create class</button>
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
