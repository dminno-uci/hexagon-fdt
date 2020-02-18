import React, { Component } from 'react'
import '../App.css';
import {Link} from "react-router-dom";

class Asset extends Component {

    render() {
        return (
            <div className="d-flex flex-column">
                <br />
                <br />
                <h3>Asset 1</h3>
                <br />
                <Link to="/dashboard">
                    <span>Back</span>
                </Link>
            </div>
        )
    }
}

export default Asset;
