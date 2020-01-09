import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StudioClassList = props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Instructor ID</th>
                        <th>Category ID</th>
                        {/* <th>Schedule Time</th>
                        <th>Zip Code</th> */}
                    </tr>
                </thead>
                <tbody>
                    {props.studioTwoClasses.map((c, index) => (
                        <tr key={index}>
                            <td><Link to={`/instructor/studioclasses/${c.id}`}>{c.title}</Link></td>
                            <td>{c.instructorId}</td>
                            <td>{c.categoryId}</td>
                            {/* <td>{c.scheduleTime}</td>
                            <td>{c.zipCode}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        studioTwoClasses: state.studioTwoClasses
    };
};

export default connect(mapStateToProps, {})(StudioClassList);
