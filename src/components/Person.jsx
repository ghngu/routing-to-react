import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {},
            personFilms: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => {
                return res.json()
            })
            .then(person => {
                this.setState({ person })
            })
    }

    render() {
        let person = this.state.person
        return (
            <div className="container d-flex justify-content-center">
                <div className="card" style={{ width: "30rem" }}>
                    <img className="card-img-top w-100" src="https://www.spi.ox.ac.uk/sites/default/files/styles/callout_person_image/public/spi/images/media/no_image_available.png?itok=npEdKFMv" alt="Card cap" />
                    <div className="card-body">
                        <h4 className="card-title">Name: {person.name}</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Gender: {person.gender}</li>
                        <li className="list-group-item">Age: {person.age}</li>
                        <li className="list-group-item">Eye Color: {person.eye_color}</li>
                        <li className="list-group-item">Hair Color: {person.hair_color}</li>
                        <li className="list-group-item">Films: {}</li>
                    </ul>
                    <div className="card-body d-flex justify-content-center">
                        <Link to="/People">Back to People</Link>
                    </div>
                </div>
            </div>
        )
    }
}