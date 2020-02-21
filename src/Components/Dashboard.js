import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import '../App.css';

import location_icon from "../images/location_icon.png";
import gear_icon from '../images/gear.png'
import pcd1 from '../images/pcd-1.jpg'

import { handleGetLocationCameras } from "../actions/cameras";
import {handleGetLocationAssets} from "../actions/assets";

import { ItemCard } from "./ItemCard";
import {handleGetLocationEvents} from "../actions/events";
import logo from "../images/Hexagon-logo.png";


class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetLocationCameras(this.props.location._id));
        this.props.dispatch(handleGetLocationAssets(this.props.location._id));
        this.props.dispatch(handleGetLocationEvents(this.props.location._id))
    }

    state = {
        focusLocationData: 'cameras',
        cameraFocus: true,
        eventFocus: false,
        assetFocus: false,

    };

    toggleLocationData = (target) => {
        this.setState(prevState => ({
            focusLocationData: target
        }));
    };

    render()  {
        const { location, cameras, assets, events } = this.props;
        const { focusLocationData } = this.state;

        function showFocusLocationData() {
                if (focusLocationData === 'cameras') {
                    return Object.keys(cameras)
                        .map((k) => {
                            return (
                                <Link to={{
                                    pathname: "/camera",
                                    state: { camera: cameras[k] }
                                }} style={{ width: '33.3%' }}>
                                    <ItemCard key={cameras[k]._id} item={cameras[k]} />
                                </Link>
                            );
                        });
                } else if (focusLocationData === 'events') {
                    return Object.keys(events)
                        .map((k) => {
                            return (
                                <Link to={{
                                    pathname: "/event",
                                    state: { event: events[k] }
                                }} style={{ width: '33.3%' }}>
                                    <ItemCard key={events[k]._id} item={events[k]} />
                                </Link>
                            );
                        });
                } else {
                    return Object.keys(assets)
                        .map((k) => {
                            return (
                                <Link to={{
                                    pathname: "/asset",
                                    state: { asset: assets[k] }
                                }} style={{ width: '33.3%' }}>
                                    <ItemCard key={assets[k]._id} item={assets[k]} />
                                </Link>
                            );
                        });
                }
        }

        function isFocus(target) {
            return focusLocationData === target;
        }

        return (
            <Fragment>
            { this.props.cameras.length < 1
            ? <Redirect to='/locations'/>
            :
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 container">
                        {/*<img src={location_icon} id="location_icon" alt='Choose Location Icon'/>*/}
                        <div className="d-flex flex-column" id="location_header_container">
                            <h3 className="d-flex flex-grow-1" id="location_header">
                                { location.name }
                            </h3>
                            <hr className="d-flex flex-grow-1" id="location_header_line" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center" id="location_lidar">
                            <img src={pcd1} id="pcd_container" alt="Point Cloud Data" />
                        </div>
                        <div className="d-flex flex-column" id="location_data_container">
                            <div className="d-flex flex-row" id="location_data_headers">
                                <div className={`d-flex justify-content-center align-items-center flex-fill location_data_header ${isFocus('cameras') ? "tabActive" : ""}`}
                                     onClick={() => this.toggleLocationData('cameras')}>
                                    Cameras
                                </div>
                                <div className={`d-flex justify-content-center align-items-center flex-fill location_data_header ${isFocus('events') ? "tabActive" : ""}`}
                                     onClick={() => this.toggleLocationData('events')}>
                                    Events
                                </div>
                                <div className={`d-flex justify-content-center align-items-center flex-fill location_data_header ${isFocus('assets') ? "tabActive" : ""}`}
                                     onClick={() => this.toggleLocationData('assets')}>
                                    Assets
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center" id="location_data">
                                { showFocusLocationData() }
                            </div>

                        </div>
                        <hr />
                        <Link to="/locations">
                            <span>Back</span>
                        </Link>
                        <br />
                    </div>
                </div>
            }
            </Fragment>
        )
    }
}

function mapStateToProps({ locations, cameras, assets, events }) {
    const zero = 0;
    const empty = [];

    return {
        location : locations.locations ? locations.locations.find((l) => l._id === locations.selectedLocation) : zero,
        cameras: cameras.length > 0 ? cameras : empty,
        assets: assets.length > 0 ? assets : empty,
        events: events.length > 0 ? events : empty,
    }
}

export default connect(mapStateToProps)(Dashboard);