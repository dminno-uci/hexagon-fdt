import React, { Component } from 'react'
import '../App.css';
import location_pin from "../images/noun_Location_14236.png";


class DashboardPath extends Component {

    render() {

        return (
            <div className="d-flex flex-row"  id="dashboard_path_container">
                <div>
                    <img src={location_pin} id="location_pin_icon" alt="Location Icon" />
                </div>
                <div>
                    Factory Blue
                </div>
                <span id="path_divider">/</span>
                <div>
                    Camera XG87Rw
                </div>
            </div>
        )
    }
}

export default DashboardPath;