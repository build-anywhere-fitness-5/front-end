import React, { useState, useEffect } from "react";
// MaterialUI
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { editPass } from "../../actions/index";

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

const EditPass = props => {
  const classes = useStyles();
  const [updatePass, setUpdatePass] = useState({
    className: "",
    client: "",
    classesRemaining: 0,
    instructor: ""
  });

  useEffect(() => {
    console.log('PROPS.PASS CONSOLE LOG', props.pass, 'INDEX', props.index);
    setUpdatePass(props.pass);
  }, []);

  const submitHandler = event => {
    event.preventDefault();
    console.log(props.pass.id);
    props.editPass(updatePass);

    // console.log(updatePass, "Edit Form submit handler")
  };

  const changeHandler = event => {
    setUpdatePass({ ...updatePass, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form style={{ backgroundColor: "white" }} onSubmit={submitHandler}>
        <h1>Update Your Pass</h1>
        <TextField
          label="Class"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          type="text"
          name="className"
          value={updatePass.className}
          onChange={changeHandler}
        />
        <TextField
          label="Client"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          type="text"
          name="client"
          value={updatePass.client}
          onChange={changeHandler}
        />

        <TextField
          label="Classes Remaining"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          type="number"
          name="classesRemaining"
          value={updatePass.classesRemaining}
          onChange={changeHandler}
        />

        <Button
          className={classes.button}
          variant="outlined"
          color="black"
          type="submit"
        >
          Update your Pass
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editPass: state.editPass
  };
};
export default connect(mapStateToProps, { editPass })(EditPass);
