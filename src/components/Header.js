import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logOut } from '../actions/index';

import './Header.css';

const Header = props => {

    const handleLogout = e => {
        e.preventDefault()
        props.logOut()
    }
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
                            <li><NavLink to="/signup/instructor">Instructor sign up</NavLink></li>
                            <li><NavLink to="/signup/client">Client sign up</NavLink></li>
                            <li><NavLink to="/login"><button>Sign in</button></NavLink></li>
                        </>
                    }

                    {/* Only for instructors */}
                    {props.signedIn && props.instructor &&
                        <>
                            <li><NavLink to="/instructor/createpass">Create pass</NavLink></li>
                            <li><NavLink to="/instructor/createclass">Create class</NavLink></li>
                            <li><NavLink to="/instructor">Dashboard</NavLink></li>
                        </>
                    }
                    {/*Only for Clients */}
                     {props.signedIn && /*!props.instructor && */
                        <>
                            <li><NavLink to="/client/">Home</NavLink></li>
                            <li><NavLink to="/client/schedule">Scheduled Classes</NavLink></li>
                        </>
                    }

                    {/* Only for those signed in */}
                    {props.signedIn &&
                        <div className="logout">
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </div>
                    }

                </ul>
            </nav>
        </header >
    )
}

const mapStateToProps = state => {
    return {
        instructor: state.instructor,
        signedIn: state.signedIn,
    }
}

export default connect((mapStateToProps), { logOut })(Header);