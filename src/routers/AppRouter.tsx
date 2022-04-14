import React, { useContext } from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
} from "react-router-dom";

import { AuthCountext } from '../auth/AuthContext';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    const { user } : any = useContext(AuthCountext)
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticate={user.logged} />
                    <PrivateRouter path="/" component={ DashboardRoutes } isAuthenticate={user.logged} />
                </Switch>
            </div>
        </Router>
    );
}
