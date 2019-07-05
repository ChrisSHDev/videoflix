import React, { Component } from "react";
import Videos from "../component/Videos";

class VideoList extends Component {
  render() {
    console.log(this.props.videos);
    console.log(this.props.mainVideo);
    return (
      <div className="videos">
        <div className="videos__next">NEXT VIDEO</div>
        {this.props.videos
          .filter(video => video.id !== this.props.mainVideo.id)
          .map(video => (
            <Videos
              title={video.title}
              channel={video.channel}
              image={video.image}
              id={video.id}
            />
          ))}
      </div>
    );
  }
}

export default VideoList;
