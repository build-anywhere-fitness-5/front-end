import React, { useState } from "react";
import { connect } from "react-redux";
import { scheduleClass, unscheduleClass } from "../../actions/index";
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
    <div>
      {props.scheduledClasses.length !== 0 ? (
        <div>
          {props.scheduledClasses.map((item, index) => (
            <div key={index} style={divStyle2}>
              <h1>Name: {item.className}</h1>
              <h1>Date: {item.date}</h1>
              <h1>Start: {item.startTime}</h1>
              <h1>Duration: {item.durationMinutes} Minutes</h1>
              <h1>Type: {item.classType}</h1>
              <h1>Intensity: {item.intensity}</h1>
              <h1>Attending: {item.clients.length}</h1>
              <h1>Max Participants: {item.maxClassSize}</h1>
              <h1>Location: {item.location}</h1>
              <h1>Instructor: {item.instructor}</h1>{" "}
              {console.log(props.scheduledClasses)}
              <button
                onClick={() => {
                  // setFilteredClass(
                  //   filteredClass.filter(filtered => {
                  //     return !filtered.scheduled;
                  //   })

                  props.unscheduleClass(item);
                  setFilteredClass([...filteredClass, item]);
                }}
              >
                Unschedule Class{" "}
              </button>
            </div>
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
