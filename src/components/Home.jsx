import React, { Component } from 'react';
import Films from './Films';
import People from './People';
import 'isomorphic-fetch';
import 'es6-promise';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            people: []
        };
    }

    componentDidMount() {
        let baseUrl = "https://ghibliapi.herokuapp.com"
        fetch(`${baseUrl}/films`)
            .then(res => { return res.json() })
            .then(films => this.setState({ films }));
        fetch(`${baseUrl}/people`)
            .then(res => { return res.json() })
            .then(people => this.setState({ people }));
    }

    render() {
        return <h1>Home</h1>
    }
}