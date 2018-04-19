import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => {
                return res.json()
            })
            .then(film => {
                this.setState({ film })
            })
    }

    render() {
        let film = this.state.film
        return (
            <div classNameName="container-fluid">
                <div className="card center-text mx-auto" style={{ width: "40rem" }}>
                    <img className="card-img-top w-100" src="https://www.thenewsgeeks.com/wp-content/uploads/2017/06/studio-ghibli-TNG-e1498577006752.jpg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <p className="card-text">{film.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Director: {film.director}</li>
                        <li className="list-group-item">Producer: {film.producer}</li>
                        <li className="list-group-item">Release Date: {film.release_date}</li>
                    </ul>
                    <div className="card-body">
                        <Link className="btn btn-primary mr-2" to="/">Home</Link>
                        <Link className="btn btn-primary" to="/films">Back to Films</Link>
                    </div>
                </div>
            </div>
        )
    }
}