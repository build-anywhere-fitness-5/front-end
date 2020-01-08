import React from 'react';
import ClassList from './ClassList';
import PassList from './PassList';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

const InstructorDashboard = props => {
    return (
        <div>
            <h2>Class list:</h2>
            <ClassList />

            <h2>Pass list:</h2>
            <PassList/>
            <h2>Category List:</h2>
            <CategoryList/>

            <Link to='/instructor/createclass/'> <button>Create class</button></Link>
            <Link to='/instructor/createpass/'> <button>Create pass</button></Link>
            <Link to='/instructor/createcategory/'> <button>Add Category</button></Link>


        </div>
    )
}

export default InstructorDashboard;