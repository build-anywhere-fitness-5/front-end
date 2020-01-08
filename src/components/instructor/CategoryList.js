import React from "react";
import { connect } from "react-redux";
import { deleteCategory, editCategory } from "../../actions/index";
import { Modal } from "@material-ui/core";
import styled from "styled-components";
import EditPass from "./EditPass";
const StyledFormDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const UserCard = styled.div`
    background-color: #FF6900;
    border: 2px solid black;
    border-radius: 5px;

`;
const CategoryList = props => {
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
      {props.categories.map((category, index) => (
        <UserCard key={index}>
            <h1>Category: {category.name}</h1>
            <h2>Description: {category.description}</h2>
          <button
            onClick={e => {
              // console.log('click')
              e.preventDefault();
              props.deleteCategory(category);
            }}
          >
            delete
          </button>
          <button
            onClick={e => {
              //   props.editPass(pass);
              // props.editPass(pass);

              // }}>
              //   {" "}
              //   edit
              //   {/* <Link to="/EditPost/:postID">Edit Post</Link> */}
              e.preventDefault();
              handleOpen();
              setItem(category);

              console.log(category);
            }}
          >
            Edit
          </button>
        </UserCard>
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
    categories: state.categories
  };
};

export default connect(mapStateToProps, { deleteCategory, editCategory })(CategoryList);
