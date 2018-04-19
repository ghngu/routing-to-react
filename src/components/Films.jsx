import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'isomorphic-fetch';
import 'es6-promise';

export default class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => { return res.json() })
            .then(films => this.setState({ films }));
    }

    render() {
        let allFilms = this.state.films.map((film) => {
            return (
                <div className="card col-md-3 mt-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Director: {film.director} <br />
                            Producer: {film.producer} <br />
                            Release Date: {film.release_date}
                        </h6>
                        <p className="card-text">{film.description.substring(0, 100)}...</p>
                        <Link className="btn btn-primary" to={`/films/${film.id}`}>See more</Link>
                    </div>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="jumbotron-flex mb-2">
                    <img className="w-100" src="http://kon-nichiwa.tokyo/wp-content/uploads/2016/11/studio_ghibli_characters_by_ficklestix-d846q1x.jpg" alt="none" />
                </div>
                <div className="link text-center">
                    <Link className="btn btn-primary mr-2" to="/">Home</Link>
                    <Link className="btn btn-primary" to="/people">People</Link>
                </div>
                <div className="row">
                    {allFilms}
                </div>
            </div>
        )
    }
}