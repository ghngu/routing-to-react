import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'isomorphic-fetch';
import 'es6-promise';

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => { return res.json() })
            .then(people => this.setState({ people }));
    }

    render() {
        let allPeople = this.state.people.map((person) => {
            return (
                <div key={person.id} className="card col-md-3 mb-2" style={{ width: "18rem" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {person.name}</li>
                        <li className="list-group-item">Gender: {person.gender}</li>
                        <li className="list-group-item">Age: {person.age}</li>
                        <li className="list-group-item">
                            <Link className="btn btn-primary" to={`/people/${person.id}`}>See More</Link>
                        </li>
                    </ul>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="jumbotron-fluid">
                    <img className="w-100" src="https://s-media-cache-ak0.pinimg.com/originals/f4/5b/26/f45b2655ca12dd93c5786e71bea8749c.jpg" alt="none" />
                </div>
                <div className="link d-flex justify-content-center mb-4">
                    <Link className="btn btn-primary mr-2" to="/">Home</Link>
                    <Link className="btn btn-primary" to={`/films`}>Films</Link>
                </div>
                <div className="row d-flex justify-content-center">
                    {allPeople}
                </div>

            </div>
        )
    }
}