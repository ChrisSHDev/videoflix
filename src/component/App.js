import React, { Component } from "react";
import "../styles/main.css";
import Header from "./Header";
import Hero from "./Hero";
import Clip from "./Clip";
import NewComment from "./NewComment";
import CommentList from "../container/CommentList";
import VideoList from "../container/VideoList";
import VideoJson from "../model/data";
import contentsController from '../helper/contentsController';

const videoData = VideoJson;

class App extends Component {

  state = {
    videos: [],
    mainVideo: {
      id: "",
      title: "",
      description: "",
      channel: "",
      image: "",
      views: "",
      likes: "",
      duration: "",
      video: "",
      timestamp: 0,
      comments: []
    }
  };

  componentDidMount() {
    console.log(videoData);
    const newVideosData = videoData.map(
      videolist => {
        return{
          id: videolist.id,
          title: videolist.title,
          channel: videolist.channel,
          image: videolist.image
        };
      }
    )

    const mainVideoData = contentsController.getVideo(videoData[0].id);

    console.log(mainVideoData)

    this.setState({
      mainVideo: mainVideoData,
      videos: newVideosData
    });

    console.log(this.state.videos);
    console.log(newVideosData);

  }

  componentDidUpdate(prevState) {
    if (
      typeof this.props.match.params.id === "undefined" &&
      prevState.location.pathname !== "/"
    ) {
      //console.log('working');
      window.location.reload();
    }
    console.log(prevState.location.pathname);
    console.log(this.props.match.params.id);

    if(this.props.match.params.id !== this.state.mainVideo.id && typeof this.props.match.params.id !== "undefined"){
      const videoId = this.props.match.params.id;
      const currentVideo = contentsController.getVideo(videoId);
      console.log(currentVideo);
      this.setState({
        mainVideo: currentVideo
      });
    }


  }

  render() {
    return (
      <div className="App">
        <Header history={this.props.history} />
        <Hero videos={this.state.mainVideo} />
        <div className="box">
          <div className="boxClip">
            <Clip videos={this.state.mainVideo} />
            <NewComment videos={this.state.mainVideo} />
            <CommentList videos={this.state.mainVideo} />
          </div>
          <VideoList
            videos={this.state.videos}
            mainVideo={this.state.mainVideo}
          />
        </div>
      </div>
    );
  }
}

export default App;
