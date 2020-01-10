import React from "react";
import { connect } from "react-redux";
import { deleteCategory, editCategory } from "../../actions/index";
import { Modal} from "@material-ui/core";
import styled from "styled-components";
import EditCategory from "./EditCategory";
const StyledFormDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const UserCard = styled.div`
    background-color: #FF9966;
    border: 2px solid black;
    border-radius: 5px;

`;
const CategoryList = props => {
  console.log(props)
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState();  

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
          <EditCategory {...props} category={item} />
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
