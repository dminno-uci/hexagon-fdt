import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Home from './Home'
import Dashboard from './Dashboard'
import Event from './Event'
import Camera from './Camera'
import Asset from './Asset'

import ChooseLocation from "./ChooseLocation";
import logo from "../images/Hexagon-logo.png";

class Wrapper extends Component {


    render() {
        return (
            <div className="d-flex flex-column" id="wrapper">
                <div className="d-flex flex-grow-1 justify-content-center" id="home_header">
                    <img src={logo} id="hex_header_logo" alt="logo" />
                </div>
                <Router>
                    <Route path='/' exact component={ Home } />
                    <Route path='/locations' exact component={ ChooseLocation } />
                    <Route path='/dashboard' exact component={ Dashboard } />
                    <Route path='/event' exact component={ Event } />
                    <Route path='/camera' exact component={ Camera } />
                    <Route path='/asset' exact component={ Asset } />
                </Router>
            </div>
        )
    }
}

export default connect()(Wrapper);
