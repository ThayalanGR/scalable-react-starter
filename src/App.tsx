import { ROUTES } from 'config/routes';
import { Dashboard } from 'layouts/Dashboard/Dashboard';
import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/index.css';

export const App = (): ReactElement => {
    return (
        <div>
            <Switch>
                {/* all other routes should be nested above this route because it is '/' route hence should be placed atlast */}
                <Route path={ROUTES.DASHBOARD}>
                    <Dashboard />
                </Route>
            </Switch>
        </div>
    );
};
