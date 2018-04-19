import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="container center text">
                <div className="jumbotron">
                    <img className="w-100" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1280px-Studio_Ghibli_logo.svg.png" alt="" />
                </div>
                <div className="row d-flex justify-content-center">
                    <Link className="btn btn-primary mr-2" to="/films">Films</Link>
                    <Link className="btn btn-primary" to="/people">People</Link>
                </div>
            </div>
        )
    }
}