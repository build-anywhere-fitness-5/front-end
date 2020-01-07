import React from 'react';
import ClassList from './ClassList';
import PassList from './PassList';
import { Link } from 'react-router-dom';
import CreateClass from './CreateClass';

const InstructorDashboard = props => {
    return (
        <div>
            <h2>Class list:</h2>
            <ClassList />

            <h2>Pass list:</h2>
            <PassList/>

            <Link to='/instructor/createclass/'> <button>Create class</button></Link>
            <Link to='/instructor/createpass/'> <button>Create pass</button></Link>

        </div>
    )
}

export default InstructorDashboard;