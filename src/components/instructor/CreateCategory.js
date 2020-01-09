import React, { useState } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../actions/index";

import { StyledInput } from "../StyledInput";
import { StyledSignupLoginButton } from "../StyledSignupLoginButton";

import './CreateFormStyles.css';

const CreateCategory = props => {
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  const handleChanges = e => {
    setNewCategory({
      ...newCategory,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addCategory(newCategory);
    props.history.push(`/instructor/`);
  };
  return (
    <div>

      <h1>Create Category</h1>

      <form className="createForm">
        <div>
        <label htmlFor="name">Category Name</label>
          <StyledInput
            type="text"
            name="name"
            value={newCategory.name}
            id="name"
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="description">Category Description</label>
          <StyledInput
            type="text"
            name="description"
            value={newCategory.description}
            id="description"
            onChange={handleChanges}
          />
        </div>
    
        <StyledSignupLoginButton onClick={handleSubmit}>Create Category</StyledSignupLoginButton>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    addCategory: state.addCategory
  };
};
export default connect(mapStateToProps, { addCategory })(CreateCategory);
