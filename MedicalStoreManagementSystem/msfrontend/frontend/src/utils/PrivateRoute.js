// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthHandler from './AuthHandler';



export function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => AuthHandler.loggedIn() ? < Component {...props} /> : <Redirect to='/' />} />
    );
}

