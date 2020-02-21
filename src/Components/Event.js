import React, { Component } from 'react'
import '../App.css';
import {Link} from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

class Event extends Component {

    render() {
        const { event } = this.props.location.state;

        return (
            <div className="d-flex flex-column">
                <div className="d-flex flex-column justify-content-center align-items-center mt-5 container">
                    <br />
                    <br />
                    <h3>{ event.name }</h3>
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

export default Event;