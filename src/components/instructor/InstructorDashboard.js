import React from 'react';
import ClassList from './ClassList';
import PassList from './PassList';
import { Link } from 'react-router-dom';

const InstructorDashboard = props => {
    return (
        <div>
            <h2>Class list:</h2>
            <ClassList />

            <h2>Pass list:</h2>
            <PassList />

            <Link to='/instructor/createclass/'> <button>Create class</button></Link>
        </div>
    )
}

export default InstructorDashboard;