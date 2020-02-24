import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import '../App.css';

class VideoPlayer extends Component {

    render()  {
        return (

            <div className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}>
                <iframe style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={this.props.videostream}
                    frameBorder="0"
                />
            </div>
        )
    }
}

function mapStateToProps({ videostream }) {

    return {
        videostream
    }
}

export default connect(mapStateToProps)(VideoPlayer);
