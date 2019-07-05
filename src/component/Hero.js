import React, { Component } from "react";
import Fullscreen from "../assets/icons/SVG/Icon-fullscreen.svg";
import Play from "../assets/icons/SVG/Icon-play.svg";
import Pause from "../assets/icons/SVG/Icon-pause.svg";
import Volume from "../assets/icons/SVG/Icon-volume.svg";

class Hero extends Component {
  render() {
    let vid = document.getElementById("play");
    let video = document.getElementById("myVideo");
    let playpause = true;
    function playVid() {
      video.play();
      if (playpause) {
        vid.setAttribute("src", Pause);
        playpause = !playpause;
      } else if (!playpause) {
        video.pause();
        vid.setAttribute("src", Play);
        playpause = !playpause;
      }
    }

    return (
      <section id="background">
        <div className="hero">
          <video
            id="myVideo"
            className="hero__play"
            poster={this.props.videos.image}
          >
            <source src="https://project-2-api.herokuapp.com/stream?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279" />
          </video>

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
