import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import '../App.css';
import location_icon from "../images/location_icon.png"
import Select from 'react-select';

import { receiveLocations, selectLocation } from "../actions/locations";
import { handleGetLocationCameras } from "../actions/cameras";


class ChooseLocation extends Component {
    componentDidMount() {
        this.props.dispatch(receiveLocations())
    }

    state = {
        selectedOption: null,
    };

    handleChange = (selectedOption) => {
        this.setState(
            { selectedOption },
            () => {
                this.props.dispatch(selectLocation(this.state.selectedOption._id));
            }
        );
    };

    submitLocation = () => {
        this.props.dispatch(handleGetLocationCameras(this.state.selectedOption._id));
    };

    render()  {
        const { locations } = this.props;
        const { selectedOption } = this.state;

        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center mt-5" id="choose_location_container">
                    <img src={location_icon} id="location_icon" alt='Choose Location Icon'/>

                    <h3 className="d-flex flex-grow-1 mb-4">
                        Select Location
                    </h3>

                    <div id="location_selector">
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={locations}
                        />
                        <Link to="/dashboard">
                            <button onClick={this.submitLocation} id="location_enter_btn">Enter</button>
                        </Link>
                    </div>
                    <hr />
                    <Link to="/">
                        <span>Back</span>
                    </Link>
                    <br />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ locations }) {
    const empty = [];

    return {
        locations : locations ? locations['locations'] : empty
    }
}

export default connect(mapStateToProps)(ChooseLocation);