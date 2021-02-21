// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainComponent from '../components/MainComponent';
import AuthHandler from './AuthHandler';



export function PrivateRouteNew({ page, activepage, ...rest }) {
    return (
        <Route   
        {...rest} 
            render={(props) => 
                AuthHandler.loggedIn() ? (
                < MainComponent page={ page } activepage={activepage} {...props} />
                ) : (
                <Redirect to='/' />
                )
            } 
        />
    );
};

