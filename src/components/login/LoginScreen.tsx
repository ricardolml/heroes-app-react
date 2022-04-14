import React, { useContext } from 'react';
import { types } from '../../types/types';
import { AuthCountext } from '../../auth/AuthContext';

export const LoginScreen = (  { history } :  any  ) => {

    const { dispatch }: any = useContext(AuthCountext);

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    const handleLogin = () =>{
        
        const action = {
            payload : {
                name: 'Ricardo Espinoza'
            },
            type : types.login
        }
        
        dispatch( action );
        history.replace( lastPath );

    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button
                className="btn btn-danger"
                onClick= {handleLogin}
            >
                Ingresar
            </button>
        </div>
    )
}
