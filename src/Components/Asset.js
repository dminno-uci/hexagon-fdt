import React, { Component } from 'react'
import '../App.css';
import {Link} from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

class Asset extends Component {

    render() {
        const { asset } = this.props.location.state;

        return (
            <div className="d-flex flex-column">
                <div className="d-flex flex-column justify-content-center align-items-center mt-5 container">
                    <br />
                    <br />
                    <h3>{ asset.name }</h3>
                    <br />
                    <br />
                    <br />

                    <VideoPlayer />

                    <Link to="/dashboard">
                        <span>Back</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Asset;
