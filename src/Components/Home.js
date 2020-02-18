import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

import factory_pin from "../images/factory_pin.png"
import devices from "../images/devices.png"
import worker from "../images/worker.png"

class Home extends Component {

    render() {
        return (
            <div className="d-flex flex-column">
                <div className="d-flex flex-grow-1 justify-content-center align-items-center home_cover">
                    <span className="d-flex flex-column justify-content-center align-items-center" id="cover_content">
                        <h3 id="home_title">SFx Factory Digital Twin</h3>
                        <Link to="/locations">
                            <button id="home_enter_btn">Get Started</button>
                        </Link>
                    </span>
                </div>
                <div className="d-flex flex-row m-0 row p-4">
                    <div className="d-flex flex-column col-sm justify-content-center align-items-center home_info_box">
                        <img src={factory_pin} className="home_info_icons" alt="Factory Pin"/>
                        <span>Eos putant saperet ornatus et, inermis assentior maiestatis cu sea. Partiendo conceptam instructior.</span>
                    </div>
                    <div className="d-flex flex-column col-sm justify-content-center align-items-center home_info_box">
                        <img src={devices} className="home_info_icons" alt="Factory Pin"/>
                        <span>Libris scripserit et mei. Vix iuvaret definitiones ad. At vel liber civibus, quod altera mea te..</span>
                    </div>
                    <div className="d-flex flex-column col-sm justify-content-center align-items-center home_info_box">
                        <img src={worker} className="home_info_icons" alt="Factory Pin"/>
                        <span>Hessen nostrum intellegebat qui id, vix elitr contentiones ei. Mel no iusto aeterno, sed solum mediocrem.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
