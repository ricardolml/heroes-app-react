import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const PrivateRouter = ({
    isAuthenticate,
    component: Component,
    ...rest
} : any ) => {

    localStorage.setItem('lastPath',rest.location.pathname);

    return (
        <Route { ...rest } component={ ( props : any ) => (
            ( isAuthenticate )
                ? <Component { ...props } />
                : ( <Redirect to='/login' /> )
        )  } />
    )
}


PrivateRouter.propType = {
    isAuthenticate : PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired
}