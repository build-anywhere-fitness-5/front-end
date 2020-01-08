import React, { useState } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../actions/index";

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
      <form>
        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          name="name"
          value={newCategory.name}
          id="name"
          onChange={handleChanges}
        />
        <label htmlFor="description">Category Description</label>
        <input
          type="text"
          name="description"
          value={newCategory.description}
          id="description"
          onChange={handleChanges}
        />
    
        <button onClick={handleSubmit}>Create Category</button>
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
