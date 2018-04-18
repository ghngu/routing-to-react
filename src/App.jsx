import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/">Go Home</Link>
                    <Link to="/films">View Films</Link>
                    <Link to="/people">View People</Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/films" component={Films} />
                        <Route path="/people" component={People} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}