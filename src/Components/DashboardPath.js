import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import '../App.css';
import location_pin from "../images/noun_Location_14236.png";
import {Link} from "react-router-dom";


class DashboardPath extends Component {

    render() {

        const { location, target } = this.props;

        return (
            <div className="d-flex flex-row"  id="dashboard_path_container">
                <div>
                    <img src={location_pin} id="location_pin_icon" alt="Location Icon" />
                </div>
                <div>
                    <Link to='/dashboard'>
                        { location.name }
                    </Link>
                </div>
                { target.length > 1 &&
                    <Fragment>
                        <span id="path_divider">//</span>
                        <div>
                            { target }
                        </div>
                    </Fragment>
                }

            </div>
        )
    }
}

function mapStateToProps({ locations, cameras, assets, events }) {
    const zero = 0;

    return {
        location: locations.locations ? locations.locations.find((l) => l._id === locations.selectedLocation) : zero,
    }
}

export default connect(mapStateToProps)(DashboardPath);
