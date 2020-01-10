import React, { useState } from "react";
import { connect } from "react-redux";
import { scheduleClass, unscheduleClass } from "../../actions/index";
import ClassCard from './ClassCard'
const ClientHome = props => {
  const [filteredClass, setFilteredClass] = useState(props.classes);

  // const divStyle = {
  //   display: "flex",
  //   width: "100%",
  //   flexDirection: "row",
  //   margin: "0 auto",
  //   flexWrap: "wrap",
  //   justifyContent: "center"
  // };
  const divStyle2 = {
    width: "25%"
  };

  return (
    <div style={divStyle2}>
      {props.scheduledClasses.length !== 0 ? (
        <div>
          {props.scheduledClasses.map((item, index) => (
          <ClassCard key={index} item={item} index={index} scheduleClass={props.unscheduleClass}  setUnScheduledClass={unscheduleClass} setFilteredClass={setFilteredClass} />
        ))}
        </div>
      ) : (
          <h1>Schedule Some Classes</h1>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    classes: state.classes,
    scheduledClasses: state.scheduledClasses
  };
};
export default connect(mapStateToProps, { scheduleClass, unscheduleClass })(
  ClientHome
);
