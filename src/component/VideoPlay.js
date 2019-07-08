import React, { Component } from 'react';

class VideoPlay extends Component {

    videoReload = () =>{
        const video = document.getElementById('myVideo');
        video.load()
        console.log("working");
    }

    componentDidUpdate(){
        this.videoReload();
    }

    render() {
        return (
            <div>
            <video
            id="myVideo"
            className="hero__play"
            poster={this.props.videos.image}
          >
            <source src="https://project-2-api.herokuapp.com/stream?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279" />
          </video>
            </div>
        );
    }
}

export default VideoPlay;