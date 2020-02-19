import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import '../App.css';
import location_icon from "../images/location_icon.png";
import { handleGetLocationCameras } from "../actions/cameras";

import { ItemCard } from "./ItemCard";
import gear_icon from '../images/gear.png'


class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetLocationCameras());
    }

    state = {
        focusLocationData: 'cameras'
    };

    toggleLocationData = (target) => {
        this.setState(prevState => ({
            focusLocationData: target
        }));
    };

    iterateOverItem = (items) => {
        return Object.keys(items)
            .map((k) => {
                return <ItemCard item={items[k]} />;
            });
    };

    render()  {
        const { location, cameras } = this.props;
        const { focusLocationData } = this.state;

        function showFocusLocationData() {
                if (focusLocationData === 'cameras') {
                    return Object.keys(cameras)
                        .map((k) => {
                            return (<ItemCard item={cameras[k]} />);
                        });
                    //         {/*<Link to="/camera">*/}
                    //             {/*<span>Camera 1</span>*/}
                    //         {/*</Link>*/}
                } else if (focusLocationData === 'events') {
                    return (
                        <div>
                            <Link to="/event">
                                <span>Event 1</span>
                            </Link>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <Link to="/asset">
                                <span>Asset 1</span>
                            </Link>
                        </div>
                    )
                }
        }

        return (
            <Fragment>
            {/*{ !this.props.locationDevices*/}
            {/*? <Redirect to='/locations'/>*/}
            {/*:*/}
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
            {/*}*/}
            </Fragment>
        )
    }
}

function mapStateToProps({ locations, cameras }) {
    const zero = 0;
    const empty = [];

    return {
        location : locations.locations ? locations.locations.find((l) => l._id === locations.selectedLocation) : zero,
        cameras: cameras.length > 0 ? cameras[0] : empty
    }
}

export default connect(mapStateToProps)(Dashboard);