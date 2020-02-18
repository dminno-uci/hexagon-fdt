import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../App.css';

class VideoPlayer extends Component {

    render()  {
        return (
            <div>
                Video Player component
                <div>
                    <Link to="/dashboard">
                        <button className="btn_sample">
                            Dashboard
                        </button>
                    </Link>
                    <br />
                    <Link to="/">
                        <span className="home_btn">Go Home</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default VideoPlayer;