import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../App.css';

class EventListItem extends Component {

    render() {

        return (
            <div className="d-flex flex-row align-items-center"  id="event_list_item">
                <div className="d-flex justify-content-start align-items-center" id="event_item_first">
                    { this.props.event.u_id }
                </div>
                <div className="d-flex justify-content-start align-items-center" id="event_item_middle">
                    <span className="item_dot">•</span>{ this.props.event.name }
                </div>
                <div className="d-flex justify-content-end align-items-center" id="event_item_last">
                    { this.props.event.timestamp }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ event }, { assets }) {
    const empty = {};

    return {
        event_asset : assets && assets.length > 0 ? assets.filter(a => a._id ===  event.asset)[0] : empty,
    }
}

export default connect(mapStateToProps)(EventListItem);