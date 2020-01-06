// Page is a Get Request for every Class from the API
// Page has a search options that filters by certain elements

import React, { useEffect } from "react";

const ClientData = [
  {
    name: "Bryan",
    type: "RIPPED",
    start: "6:30PM",
    duration: "30Min",
    intensity: "difficult",
    location: "Utah",
    attending: "50",
    maxCap: "100"
  },
  {
    name: "Bryan",
    type: "RIPPED",
    start: "6:30PM",
    duration: "30Min",
    intensity: "difficult",
    location: "Utah",
    attending: "50",
    maxCap: "100"
  }
];
const ClientHome = () => {
  return (
    <div>
      {ClientData.map((item, index) => (
          <div> 
              <h1>Name: {item.name}</h1>
              <h1>Start: {item.start}</h1>
              <h1>Duration: {item.duration}</h1>
              <h1>Type: {item.type}</h1>
              <h1>Intensity: {item.intensity}</h1>
              <h1>Attending: {item.attending}</h1>
              <h1>Max Participants: {item.maxCap}</h1>
              <h1>Location: {item.location}</h1>
              <button>Schedule Class</button>
          </div>
      ))}
    </div>
  );
};
export default ClientHome;
