import React from "react";
import { connect } from "react-redux";
import { deletePass, editPass } from "../../actions/index";
import { Modal } from "@material-ui/core";
import EditPass from "./EditPass";
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
    <div>
      <table>
        <thead>
          <tr>
            <th>Pass holder</th>
            <th>Class</th>
            <th>Classes Remaining</th>
          </tr>
        </thead>
        <tbody>
          {props.passes.map((pass, index) => (
            <tr key={index}>
              <td>{pass.client}</td>
              <td>{pass.className}</td>
              <td>{pass.classesRemaining}</td>
              <button
                onClick={e => {
                  // console.log('click')
                  e.preventDefault();
                  props.deletePass(pass);
                  console.log(pass);
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
                  setItem(pass)

                  console.log(pass);
                }}
              >
                Edit
              </button>
            </tr>
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
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    passes: state.passes
  };
};

export default connect(mapStateToProps, { deletePass, editPass })(PassList);
