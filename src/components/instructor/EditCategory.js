import React, { useState, useEffect } from "react";
// MaterialUI
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { editCategory } from "../../actions/index";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "35%"
  },
  dense: {
    marginTop: theme.spacing(2)
  },

  button: {
    margin: theme.spacing(1),
    marginTop: "2%",
    marginBottom: "4.3%",
    width: "15%"
  },
  input: {
    display: "none"
  },
  DropdownBoxContainer: {
    marginTop: "1%",
    display: "flex",
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-around"
  },
  DropdownBox: {
    width: "200px"
  }
}));

const EditCategory = props => {
  const classes = useStyles();
  const [updateCategory, setUpdateCategory] = useState({
    name: '',
    category: '',
  });

  useEffect(() => {
    console.log("PROPS.CATEGORY CONSOLE LOG", props.updateCategory, "INDEX", props.index);
    setUpdateCategory(props.category);
  }, [props.category, props.index, props.updateCategory]);

  const submitHandler = event => {
    event.preventDefault();
    console.log(props.category.id);
    props.editCategory(updateCategory);

  };

  const changeHandler = event => {
    setUpdateCategory({ ...updateCategory, [event.target.name]: event.target.value });
  };

  return (
    <div style={{ width: '40%', height: '100%' }}>
      <form style={{ backgroundColor: "white" }} onSubmit={submitHandler}>
        <h1>Edit This Category</h1>
        <TextField
          label="name"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          type="text"
          name="name"
          value={updateCategory.name}
          onChange={changeHandler}
        />
        <TextField
          label="Description"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          type="text"
          name="description"
          value={updateCategory.description}
          onChange={changeHandler}
        />

        <Button
          className={classes.button}
          variant="outlined"
          color="black"
          type="submit"
        >
          Edit Category
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editCategory: state.editCategory
  };
};
export default connect(mapStateToProps, { editCategory })(EditCategory);
