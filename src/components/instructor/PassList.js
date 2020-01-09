import React from "react";
import { connect } from "react-redux";
import { deletePass, editPass } from "../../actions/index";
import { Modal } from "@material-ui/core";
import styled from "styled-components";
import EditPass from "./EditPass";
import UserCard from "./UserCard";
const StyledFormDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const PassList = props => {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState();

  // const [openAccount, setOpenAccount] = React.useState(false);
  // const [postTool, setPostTool] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledFormDiv>
      {props.passes.map((pass, index) => (
        <UserCard key={index} pass={pass} deletePass={deletePass} handleOpen={handleOpen} setItem={setItem} />
      ))}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div>
          <EditPass {...props} pass={item} />
        </div>
      </Modal>
    </StyledFormDiv>
  );
};

const mapStateToProps = state => {
  return {
    passes: state.passes
  };
};

export default connect(mapStateToProps, { deletePass, editPass })(PassList);
