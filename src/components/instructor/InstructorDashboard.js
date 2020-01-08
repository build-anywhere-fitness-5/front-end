import React from 'react';
import ClassList from './ClassList';
import PassList from './PassList';
import { Link } from 'react-router-dom';
import StudioClassList from './StudioClassList';

const InstructorDashboard = props => {
    return (
        <div>
            <h2>Class list:</h2>
            <ClassList />

            <h2>Studio 2 Class List (API)</h2>
            <StudioClassList />

            <h2>Pass list:</h2>
            <PassList />

            <Link to='/instructor/createclass/'> <button>Create class</button></Link>
            <Link to='/instructor/createstudioclass/'> <button>Create studio class</button></Link>
            <Link to='/instructor/createpass/'> <button>Create pass</button></Link>

        </div>
    )
}

export default InstructorDashboard;