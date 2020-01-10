import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteCategory, editCategory, fetchCategory } from "../../actions/index";
import { Modal, ListItemSecondaryAction } from "@material-ui/core";
import styled from "styled-components";
import EditCategory from "./EditCategory";


const CategoryList = props => {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState();
  useEffect(() => {
    console.log('token is in', sessionStorage.getItem('token'))
   
      props.fetchCategory()
    
   
  }, [sessionStorage.getItem('token')]
  );
  // const [openAccount, setOpenAccount] = React.useState(false);
  // const [postTool, setPostTool] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>

        {props.categories.map((category, index) => (

                <tr key={index}>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>
                        <button
                            onClick={e => {
                            // console.log('click')
                            e.preventDefault();
                            props.deleteCategory(category);
                            }}
                        >
                            delete
                        </button>
                    </td>
                    <td>
                        <button
                            onClick={e => {
                            e.preventDefault();
                            handleOpen();
                            setItem(category);

                            console.log(category);
                            }}
                        >
                            edit
                        </button>
                    </td>
            </tr>
        ))}

            </tbody>
        </table>
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
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { deleteCategory, editCategory, fetchCategory })(CategoryList);
