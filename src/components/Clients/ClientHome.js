// Page is a Get Request for every Class from the API
// Page has a search options that filters by certain elements

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { scheduleClass, unscheduleClass } from "../../actions/index";
const ClientHome = props => {
  const [query, setQuery] = useState("");
  const [unScheduledClass, setUnScheduledClass] = useState(props.classes);
  const [filteredClass, setFilteredClass] = useState(unScheduledClass);
  const handleInputChange = event => {
    setQuery(event.target.value);
    console.log(event);
  };
  useEffect(() => {
    console.log(filteredClass);
    if (query.length < 1) {
      setFilteredClass(unScheduledClass);
    } else {
      let filterClasses = filteredClass.filter(c => {
        return (
          c.className.toLowerCase().includes(query.toLowerCase()) ||
          c.classType.toLowerCase().includes(query.toLowerCase()) ||
          c.startTime.toLowerCase().includes(query.toLowerCase()) ||
          c.intensity.toLowerCase().includes(query.toLowerCase()) ||
          c.date.toLowerCase().includes(query.toLowerCase()) ||
          c.location.toLowerCase().includes(query.toLowerCase())
        );
      });
   
    setFilteredClass(filterClasses);
    console.log(filterClasses);
    console.log(filteredClass);
  } }, [query]);

  console.log(query);
  console.log(filteredClass);
  const divStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    margin: "0 auto",
    flexWrap: "wrap",
    justifyContent: "center"
  };
  const divStyle2 = {
    width: "25%"
  };

  return (
    <div>
      <SearchForm handleInputChange={handleInputChange} query={query} />
      <div style={divStyle}>
        {filteredClass.map((item, index) => (
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
            <h1>Instructor: {item.instructor}</h1>
            <button
              onClick={() => {
                props.scheduleClass(item);
                setUnScheduledClass(filteredClass =>
                  filteredClass.filter((item, i) => i !== index)
                );
                setFilteredClass(filteredClass =>
                  filteredClass.filter((item, i) => i !== index)
                );
              }}
            >
              Schedule Class
            </button>
          </div>
        ))}
      </div>
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
