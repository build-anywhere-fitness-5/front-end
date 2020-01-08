import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import './Header.css';

const Header = props => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">Anywhere Fitness</Link>
                </div>
                <ul>
                    {/* Only for those not signed in */}
                    {!props.signedIn &&
                        <>
                            <li><NavLink to="/login">Sign in</NavLink></li>
                            <li><NavLink to="/signup/instructor">Instructor sign up</NavLink></li>
                            <li><NavLink to="/signup/client">Client sign up</NavLink></li>
                        </>
                    }

                    {/* Only for instructors */}
                    {props.instructor &&
                        <>
                            <li><NavLink to="/instructor/createpass">Create pass</NavLink></li>
                            <li><NavLink to="/instructor/createclass">Create class</NavLink></li>
                            <li><NavLink to="/instructor">Dashboard</NavLink></li>
                        </>
                    }

                    {/* Only for those signed in */}
                    <li><button>Logout</button></li>
                </ul>
            </nav>
        </header >
    )
}

const mapStateToProps = state => {
    return {
        instructor: state.instructor,
        signedIn: state.signedIn
    }
}

export default connect((mapStateToProps), {})(Header);