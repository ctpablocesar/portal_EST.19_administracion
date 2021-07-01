import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { DashBoardRoutes } from './DashBoardRoutes';
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { LoginScreen } from '../auth/LoginScreen'

export const AppRouter = () => {
    const isAuthenticated = false;
    return (  
        <Router>
            <main>
                <Switch>
                    <PublicRoute
                        path="/"
                        exact
                        isAuthenticated={isAuthenticated}
                        component={LoginScreen}
                        />
                    <PrivateRoute
                        path="/admin"
                        isAuthenticated={isAuthenticated}
                        component={DashBoardRoutes}
                    />
                </Switch>
            </main>
        </Router>
    )
}