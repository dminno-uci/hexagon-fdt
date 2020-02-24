import React, { Component } from 'react'
import '../App.css';

class CameraViewItem extends Component {

    render() {

        return (
            <div className="d-flex flex-row align-items-center"  id="event_list_item">
                <div className="d-flex justify-content-start align-items-center camera_item" id="event_item_first">
                    { this.props.camera._id }
                </div>
                <div className="d-flex justify-content-start align-items-center camera_item" id="event_item_middle">
                    <span className="item_dot">•</span>{ this.props.camera.name }
                </div>
                <div className="d-flex justify-content-end align-items-center camera_item" id="event_item_last">
                    { this.props.camera.timestamp }
                </div>
            </div>
        )
    }
}

export default CameraViewItem;