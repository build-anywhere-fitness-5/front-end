// Page is a Get Request for every Class from the API
// Page has a search options that filters by certain elements

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import ClassCard from './ClassCard'
import { scheduleClass, unscheduleClass, fetchClasses } from "../../actions/index";

import ClassStatus from "../ClassStatus";

import styled from "styled-components";

const WelcomeText = styled.p`

  font-weight: bold;
  font-size: 1.5rem;

`;

const ClientHome = props => {
  const [query, setQuery] = useState("");
  const [unScheduledClass, setUnScheduledClass] = useState(props.classes);
  const [filteredClass, setFilteredClass] = useState(unScheduledClass);
  const handleInputChange = event => {
    setQuery(event.target.value);
    console.log(event);
  };
  useEffect(() => {
    // props.fetchClasses()
    if (query.length < 1) {
      setFilteredClass(unScheduledClass)
    } else {
      let filterClasses = unScheduledClass.filter(c => {
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
  } }, [query, unScheduledClass]);

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

  return (
    <div>
      <ClassStatus />
      
      <SearchForm handleInputChange={handleInputChange} query={query} />
      <div style={divStyle}>
        {filteredClass.map((item, index) => (
          <ClassCard key={index}item={item} index={index} scheduleClass={props.scheduleClass} setUnScheduledClass={setUnScheduledClass} setFilteredClass={setFilteredClass} />
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
export default connect(mapStateToProps, { scheduleClass, unscheduleClass, fetchClasses })(
  ClientHome
);