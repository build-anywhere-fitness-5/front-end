import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ClassList = props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Type</th>
                        <th>Start Time</th>
                        <th>Duration</th>
                        <th>Intensity</th>
                        <th>Location</th>
                        <th>Class Size</th>
                        <th>Open spots</th>
                        <th>Date</th>
                        <th>Instructor</th>


                    </tr>
                </thead>
                <tbody>
                    {props.classes.map(c => (
                        <tr key={c.id}>
                            <td><Link to={`/instructor/classes/${c.id}`}>{c.className}</Link></td>
                            <td>{c.type}</td>
                            <td>{c.startTime}</td>
                            <td>{c.durationMinutes}</td>
                            <td>{c.intensity}</td>
                            <td>{c.location}</td>
                            <td>{c.maxClassSize}</td>
                            <td>{c.maxClassSize - c.clients.length}</td>
                            <td>{c.date}</td>
                            <td>{c.instructor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
};

const mapStateToProps = state => {
    return {
        classes: state.classes
    };
};

export default connect(mapStateToProps, {})(ClassList);
