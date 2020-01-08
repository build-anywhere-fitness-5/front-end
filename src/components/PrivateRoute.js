import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (sessionStorage.getItem('token') != 0) {
                    //render component from props
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/login' />
                }
            }}
        />
    );
}

export default PrivateRoute 