import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import '../App.css';

import location_icon from "../images/location_icon.png";
import gear_icon from '../images/gear.png'

import { handleGetLocationCameras } from "../actions/cameras";
import {handleGetLocationAssets} from "../actions/assets";

import { ItemCard } from "./ItemCard";
import {handleGetLocationEvents} from "../actions/events";


class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetLocationCameras(this.props.location._id));
        this.props.dispatch(handleGetLocationAssets(this.props.location._id));
        this.props.dispatch(handleGetLocationEvents(this.props.location._id))
    }

    state = {
        focusLocationData: 'cameras'
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
                            return (<ItemCard key={cameras[k]._id} item={cameras[k]} />);
                        });
                    //         {/*<Link to="/camera">*/}
                    //             {/*<span>Camera 1</span>*/}
                    //         {/*</Link>*/}
                } else if (focusLocationData === 'events') {
                    return Object.keys(events)
                        .map((k) => {
                            return (<ItemCard key={events[k]._id} item={events[k]} />);
                        });
                } else {
                    return Object.keys(assets)
                        .map((k) => {
                            return (<ItemCard key={assets[k]._id} item={assets[k]} />);
                        });
                }
        }

        return (
            <Fragment>
            { this.props.cameras.length < 1
            ? <Redirect to='/locations'/>
            :
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 container">
                        <img src={location_icon} id="location_icon" alt='Choose Location Icon'/>

                        <h3 className="d-flex flex-grow-1 mb-4">
                            { location.name }
                        </h3>
                        <div className="d-flex justify-content-center align-items-center" id="location_lidar">
                            <span>LOCATION LIDAR</span>
                        </div>
                        <div className="d-flex flex-column" id="location_data_container">
                            <div className="d-flex flex-row" id="location_data_headers">
                                <div className="d-flex justify-content-center align-items-center flex-fill"
                                     id="location_data_header"
                                     onClick={() => this.toggleLocationData('cameras')}>
                                    Cameras
                                </div>
                                <div className="d-flex justify-content-center align-items-center flex-fill"
                                     id="location_data_header"
                                     onClick={() => this.toggleLocationData('events')}>
                                    Events
                                </div>
                                <div className="d-flex justify-content-center align-items-center flex-fill"
                                     id="location_data_header"
                                     onClick={() => this.toggleLocationData('assets')}>
                                    Assets
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center" id="location_data">
                                { showFocusLocationData() }
                            </div>

                        </div>
                        {/*<div className="d-flex flex-grow-1 flex-wrap flex-shrink-1 justify-content-center">*/}
                            {/*{*/}
                                {/*locationDevices && locationDevices.map((d) => (*/}
                                    {/*<div className="card d-flex justify-content-center align-items-center device_card">*/}
                                        {/*<img src={gear_icon} className="card-img-top device_icons"  alt="Device Icons" />*/}
                                        {/*<div className="card-body">*/}
                                            {/*<h5 className="card-title">{d.name}</h5>*/}
                                            {/*/!*<p className="card-text">Some quick example text to build on the card title and make*!/*/}
                                                {/*/!*up the bulk of the card's content.</p>*!/*/}
                                            {/*<a href="#" className="btn btn-primary">View stream</a>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*))*/}
                            {/*}*/}
                        {/*</div>*/}
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