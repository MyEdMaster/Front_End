import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
//import AnimatedRouter from 'react-animated-router';
import 'react-animated-router/animate.css';

import {RRH} from "./page/RRH";
import {HomePage} from "./page/HomePage";
import {ComplexNumber} from "./page/ComplexNumber";
import {TestPage} from "./page/test-page";
import {Function} from "./page/Function";

export class App extends Component {
    render() {
        return (
            <Route>
                <Switch>
                    <Route
                        path="/home"
                        component={routeProps => <HomePage {...routeProps} />}
                    />
                    <Route
                        path="/test"
                        component={routeProps => <TestPage {...routeProps} />}
                    />

                    <Route
                        path="/rrh"
                        component={routeProps => <RRH {...routeProps} />}
                    />
                    <Route
                        path="/complex"
                        component={routeProps => <ComplexNumber {...routeProps} />}
                    />
                    <Route
                        path="/function"
                        component={routeProps => <Function {...routeProps} />}
                    />
                    <Redirect to="/home"/>
                </Switch>
            </Route>

        );
    }
}
