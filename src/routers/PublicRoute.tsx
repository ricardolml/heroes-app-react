import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticate,
    component: Component,
    ...rest
} : any ) => {
    return (
        <Route { ...rest } component={ ( props : any ) => (
            ( !isAuthenticate )
                ? <Component { ...props } />
                : ( <Redirect to='/' /> )
        )  } />
    )
}


PublicRoute.propType = {
    isAuthenticate : PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired
}