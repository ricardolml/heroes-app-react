import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthCountext } from './auth/AuthContext';
import { AuthReducer } from './auth/AuthReducer';

const init = () =>{
    return  JSON.parse( localStorage.getItem('user')) || { logged : false } ;
}

export const HeroesApp = () => {

    const [ user , dispatch ] = useReducer( AuthReducer, {}, init);

    useEffect(() => {
        localStorage.setItem( 'user' , JSON.stringify(user) );
    }, [user])

    return (
        <AuthCountext.Provider value={ { user ,  dispatch } } >
            <AppRouter />
        </AuthCountext.Provider>
    )
}
