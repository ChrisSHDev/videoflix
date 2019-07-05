import React, { Component } from "react";
import Views from "../assets/icons/SVG/Icon-views.svg";
import Likes from "../assets/icons/SVG/Icon-likes.svg";
import ConvertTime from "../my-func/ConvertTime";

class Clip extends Component {
  render() {
    const clipVideo = this.props.videos;
    return (
      <section className="clip">
        <div className="clip__title">{clipVideo.title}</div>
        <div id="clip">
          <div className="clip__letters">
            <div id="channel">{clipVideo.channel}</div>
            <div id="date">{ConvertTime(clipVideo.timestamp)}</div>
          </div>
          <div className="clip__likes">
            <div id="views">
              <img src={Views} alt="views" />
              {clipVideo.views}
            </div>
            <div id="hearts">
              <img src={Likes} alt="likes" />
              {clipVideo.likes}
            </div>
          </div>
        </div>
        <div className="clip__description">{clipVideo.description}</div>
      </section>
    );
  }
}

export default Clip;
