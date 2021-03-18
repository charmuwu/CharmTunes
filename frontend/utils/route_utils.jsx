import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import { Route, withRouter } from 'react-router-dom';

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
})
const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path ={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);
const Protected = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props}/> : <Redirect to="/signup"/>
        )}
    />
);
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
export const AuthRoute = withRouter(connect(mSTP)(Auth));