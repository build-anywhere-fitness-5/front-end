// Page is a Get Request for every Class from the API
// Page has a search options that filters by certain elements

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
const initialState = {
    classes: [
        {
            className: 'CrossFit Monday',
            type: 'CrossFit',
            startTime: '11:45PM',
            durationMinutes: 45,
            intensity: 'high',
            location: 'Studio Los Feliz',
            maxClassSize: 10,
            clients: [
                'susieclient'
            ],
            date: '2019-12-12',
            instructor: 'joeinstructor',
        }
    ],
    passes: [
        {
            className: 'CrossFit',
            instructor: 'joeinstructor',
            client: 'susieclient',
            classesRemaining: 5
        }
    ]
}
const ClientHome = () => {
  const [query, setQuery] = useState("");
  const [classes, setClass] = useState(initialState.classes);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    console.log(classes);
    let filterClasses = initialState.classes.filter(contact => {
      return (
        contact.className.toLowerCase().includes(query.toLowerCase()) ||
        contact.type.toLowerCase().includes(query.toLowerCase()) ||
        contact.startTime.toLowerCase().includes(query.toLowerCase()) ||
        contact.intensity.toLowerCase().includes(query.toLowerCase()) ||
        contact.date.toLowerCase().includes(query.toLowerCase()) ||
        contact.location.toLowerCase().includes(query.toLowerCase())
      );

    });
    setClass(filterClasses);
    console.log(filterClasses);
    console.log(classes);
  }, [query]);

  console.log(query);
  console.log(classes);
  return (
    <div>
      <SearchForm handleInputChange={handleInputChange} query={query} />
      {classes.map((item, index) => (
        <div>
          <h1>Name: {item.className}</h1>
          <h1>Date: {item.date}</h1>
          <h1>Start: {item.startTime}</h1>
          <h1>Duration: {item.durationMinutes} Minutes</h1>
          <h1>Type: {item.type}</h1>
          <h1>Intensity: {item.intensity}</h1>
          <h1>Attending: {item.attending}</h1>
          <h1>Max Participants: {item.maxCap}</h1>
          <h1>Location: {item.location}</h1>
          <h1>Instructor: {item.instructor}</h1>
          <button>Schedule Class</button>
        </div>
      ))}
    </div>
  );
};
export default ClientHome;
