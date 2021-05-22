import React from 'react';

import {
    Router,
    Switch,
    Route
} from 'react-router-dom';

import history from './history';
import Home from "./pages/Home";

function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route component={Home} path="/" exact />
                {/*<Route component={Monitor} path="/monitor/:txid" exact />*/}
            </Switch>
        </Router>
    );
}

export default AppRouter;