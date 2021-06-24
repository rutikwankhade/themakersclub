import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, isAuthenticated, loading, ...rest }) => (

    <Route {...rest}
        render={props => !isAuthenticated && !loading ?
            (<Redirect to="/login"></Redirect>)
            : (<Component {...props} />)} />
)

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    loading: state.authReducer.loading
});

export default connect(mapStateToProps)(PrivateRoute);