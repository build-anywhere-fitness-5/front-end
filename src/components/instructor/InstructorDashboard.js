import React, { useEffect } from 'react';
import ClassList from './ClassList';
import PassList from './PassList';
import { Link } from 'react-router-dom';
import StudioClassList from './StudioClassList';
import { connect } from "react-redux";

import { getStudioClasses, fetchCategory } from '../../actions/index';

import CategoryListTable from "./CategoryListTable";

import "./dashboard.css";

const InstructorDashboard = props => {

    useEffect(() => {
        props.getStudioClasses();
        props.fetchCategory();
    }, [props.getStudioClasses, props])
    useEffect(() => {
        props.fetchCategory();
    }, [ props.fetchCategory, props])

    console.log(props);

    return (

        <div className="container instructor">
            
            <h1>Instructor Dashboard</h1>
        
            <section className="schedule container">
                <h2 className="studioHeader">Your Studio 1 Information</h2>
                <div className="studio-box">
                    <div className="studio-box-child">
                        <div className="studio-creation">
                            <Link to='/instructor/createclass/'><button>Create class</button></Link>
                            <h3>Schedule</h3>
                            <Link className="create_class_spacer" to='/instructor/createclass/'><button>Create class</button></Link>
                        </div>
                        
                        <div className="studio-lists">
                            <ClassList />
                        </div>
                    </div>

                    <div className="studio-box-child">
                        <div className="studio-creation">
                            <Link to='/instructor/createpass/'><button>Create pass</button></Link>
                            <h3>Punch Passes</h3>
                            <Link className="create_pass_spacer" to='/instructor/createpass/'><button>Create pass</button></Link>
                        </div>
                        
                        <div className="studio-pass-box">
                            <PassList classNameName="studio-pass" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="schedule container">
                
                <h2 className="studioHeader">Your Studio 2 Information</h2>

                <div className="categories">
                    <div className="categories-boxes studio2">
                        <div className="studio-creation">
                            <Link to='/instructor/createcategory/'> <button>Add category</button></Link>
                            <h3>Categories</h3>
                            <div> </div>
                        </div>
                        
                        <CategoryListTable />
                    </div>

                    <div className="categories-boxes studio2">
                        <div className="studio-creation">
                        <Link to='/instructor/createstudioclass/'> <button>Create studio class</button></Link>
                            <h3>Studio Classes</h3>
                            <div> </div>
                        </div>
                        
                        <StudioClassList />
                    </div>
                </div>
            </section>

        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { getStudioClasses, fetchCategory })(InstructorDashboard);