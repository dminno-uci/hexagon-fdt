import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import '../App.css';

import pcd1 from '../images/pcd-1.jpg'

import { handleGetLocationCameras } from "../actions/cameras";
import {handleGetLocationAssets} from "../actions/assets";

import { ItemCard } from "./ItemCard";
import {handleGetLocationEvents} from "../actions/events";

import DashboardPath from './DashboardPath'
import EventListItem from "./EventListItem";


class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetLocationCameras(this.props.location._id));
        this.props.dispatch(handleGetLocationAssets(this.props.location._id));
        this.props.dispatch(handleGetLocationEvents(this.props.location._id))
    }

    state = {
        focusLocationData: 'assets',
        cameraFocus: true,
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
                                }} >
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
                                }} >
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
                                }} >
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
                <div className="d-flex flex-column justify-content-center align-items-center"  id="dashboard_container">
                    <DashboardPath />
                    <div className="d-flex flex_row dashsboard_row" id="dashsboard_row">

                        <div className="d-flex flex-column" id="pcd_section">
                            <h5 className="section_header">
                                Lidar Stream
                            </h5>
                             <div id="pcd_container">
                                 <img src={pcd1} id="pcd_image" alt="Point Cloud Data" />
                             </div>
                        </div>

                        <div className="d-flex flex-column" id="event_list_section">
                            <h5 className="d-flex flex-row section_header">
                                Event List
                                <div className="d-flex align-items-center justify-content-center ml-auto" id="event_see_all_btn">
                                    See all
                                </div>
                            </h5>

                            <div className="d-flex flex-column" id="event_list_container">
                                {
                                    Object.keys(events)
                                    .map((event_id) => {
                                        return (
                                            <Link to={{
                                                pathname: "/event",
                                                state: {event: events[event_id]}
                                            }} >
                                                <div className="d-flex flex-column" id="event_list">
                                                    <EventListItem event={events[event_id]} />
                                                </div>
                                            </Link>
                                        );
                                    })
                                }
                            </div>

                        </div>

                    </div>

                    <div className="d-flex flex-column" id="location_data_container">

                        <div className="d-flex flex-row" id="location_data_headers">
                            <h5 className={`d-flex flex-row section_header location_data_header ${isFocus('assets') ? "tabActive" : ""}`}
                                onClick={() => this.toggleLocationData('assets')}>
                                Assets
                            </h5>

                            <h5 className={`d-flex flex-row section_header location_data_header ${isFocus('cameras') ? "tabActive" : ""}`}
                                 onClick={() => this.toggleLocationData('cameras')}>
                                Cameras
                            </h5>
                        </div>

                        <div className="d-flex justify-content-start align-items-center" id="location_data">
                            { showFocusLocationData() }
                        </div>

                    </div>
                    <hr />
                    <Link to="/locations">
                        <span>Back</span>
                    </Link>
                    <br />
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
        location: locations.locations ? locations.locations.find((l) => l._id === locations.selectedLocation) : zero,
        // locations: 1,
        cameras: cameras.length > 0 ? cameras : empty,
        assets: assets.length > 0 ? assets : empty,
        events: events.length > 0 ? events : empty,
    }
}

export default connect(mapStateToProps)(Dashboard);