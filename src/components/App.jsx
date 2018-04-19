import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import Film from './Film';
import People from './People';
import Person from './Person';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component={Film} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/:id" component={Person} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}