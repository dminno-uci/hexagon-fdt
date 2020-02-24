import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux';

import {Link} from "react-router-dom";
import DashboardPath from "./DashboardPath";
import pcd1 from "../images/pcd-1.jpg";
import VideoPlayer from "./VideoPlayer";
import machine_icon from "../images/noun_Machine_2099014.png";
import {selectStream} from "../actions/videostream";
import CameraViewItem from "./CameraViewItem";

class Asset extends Component {

    componentDidMount() {
        this.props.cameras[0] && this.props.dispatch( selectStream(this.props.cameras[0].stream_path) )
    }

    render() {
        const { asset, cameras, dispatch } = this.props;

        return (
            <div className="d-flex flex-column justify-content-center align-items-center"  id="dashboard_container">
                <DashboardPath target="Asset"/>
                <div className="d-flex flex_row dashsboard_row" id="dashsboard_row">

                    <div className="d-flex flex-column" id="pcd_section">
                        <h5 className="d-flex align-items-center section_header">
                            { asset.name }
                        </h5>
                        <div id="pcd_container">
                            <VideoPlayer />
                        </div>
                    </div>

                    <div className="d-flex flex-column" id="event_list_section">
                        <h5 className="d-flex flex-row section_header">
                            Camera Views
                            <div className="d-flex align-items-center justify-content-center ml-auto" id="event_see_all_btn">
                                See all
                            </div>
                        </h5>

                        <div className="d-flex flex-column" id="event_list_container">
                            {
                                cameras.map((c) => {
                                    return (
                                        <div className="d-flex flex-column" id="event_list" onClick={ () => dispatch(selectStream(c.stream_path)) }>
                                            <CameraViewItem camera={c}/>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>

                </div>

                {/*<div className="d-flex flex-column" id="location_data_container">*/}

                {/*<div className="d-flex flex-row" id="location_data_headers">*/}
                {/*<h5 className={`d-flex flex-row section_header location_data_header ${isFocus('assets') ? "tabActive" : ""}`}*/}
                {/*onClick={() => this.toggleLocationData('assets')}>*/}
                {/*Assets*/}
                {/*</h5>*/}

                {/*<h5 className={`d-flex flex-row section_header location_data_header ${isFocus('cameras') ? "tabActive" : ""}`}*/}
                {/*onClick={() => this.toggleLocationData('cameras')}>*/}
                {/*Cameras*/}
                {/*</h5>*/}
                {/*</div>*/}

                {/*<div className="d-flex justify-content-start align-items-center" id="location_data">*/}
                {/*{ showFocusLocationData() }*/}
                {/*</div>*/}

                {/*</div>*/}
                {/*<hr />*/}
                {/*<Link to="/locations">*/}
                    {/*<span>Back</span>*/}
                {/*</Link>*/}
                {/*<br />*/}
            </div>
        )
    }
}

function mapStateToProps({ assets, cameras }) {
    const zero = 0;
    const empty = [];


    let assetCameras = empty;
    if (assets.selectedAsset && cameras) {
        assetCameras =
            assets.selectedAsset.cameras.map((c) => {
                return cameras.filter((c2) => {
                    return c === c2._id;
                })[0]
            });
    }

    return {
        asset: assets.selectedAsset ? assets.selectedAsset : "",
        cameras: assetCameras
    }
}

export default connect(mapStateToProps)(Asset);

