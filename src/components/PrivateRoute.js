import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest}) => {
    console.log(props.roleId)
    return (
        <Route
            {...rest}
            render={props => {
                if (sessionStorage.getItem('token') && props.roleId != 0) {
                    //render component from props
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/login' />
                }
            }}
        />
    );
}

const mapStateToProps = state => {
    return {
        roleId: state.user.roleId
    }
}

export default connect(mapStateToProps, { })(PrivateRoute);