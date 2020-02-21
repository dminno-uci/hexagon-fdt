import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player'

import '../App.css';

class VideoPlayer extends Component {

    render()  {
        return (
            <Fragment>
                <div className='player_wrapper'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=GG1kYWLkBHE'
                        className='react_player'
                        playing
                        width='100%'
                        height='100%'
                    />
                </div>
                <br />
                <Link to="/">
                    <span className="home_btn">Go Home</span>
                </Link>
            </Fragment>
        )
    }
}

export default VideoPlayer;