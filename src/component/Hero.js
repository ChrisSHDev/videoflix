import React, { Component } from "react";
import Fullscreen from "../assets/icons/SVG/Icon-fullscreen.svg";
import Play from "../assets/icons/SVG/Icon-play.svg";
import Pause from "../assets/icons/SVG/Icon-pause.svg";
import Volume from "../assets/icons/SVG/Icon-volume.svg";
import VideoPlay from "./VideoPlay";

class Hero extends Component {

  componentDidMount(){

  }

  render() {
    let vid = document.getElementById("play");
    let video = document.getElementById("myVideo");
    let playpause = true;

    const playVid = () => {
      video.play();
      if (playpause) {
        vid.setAttribute("src", Pause);
        playpause = !playpause;
      } else if (!playpause) {
        video.pause();
        vid.setAttribute("src", Play);
        playpause = !playpause;
      }
    };
    console.log(this.props.videos.image);
    console.log(this.props.videos);
    return (
      <section id="background">
        <div className="hero">
          <VideoPlay videos={this.props.videos} />

          <div className="hero__scroll">
            <img onClick={playVid} id="play" src={Play} alt="play-button" />
            <div className="hero__scroll--hr">
              <hr /> <p>0:00 / {this.props.videos.duration}</p>
            </div>
            <div className="hero__scroll--stuffs">
              <img id="fullscreen" src={Fullscreen} alt="curser" />
              <img id="volume" src={Volume} alt="volume" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
