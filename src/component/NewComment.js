import React, { Component } from "react";
import Mohan from "../assets/images/Mohan-muruge.jpg";
import axios from "axios";

export default class NewComment extends Component {
  state = {
    message: ""
  };

  addComment = event => {
    const time = new Date();
    const timeStr = time.toLocaleDateString();

    const videoId = this.props.videos.id;
    const currentVideo = `http://localhost:5000/video/videos/${videoId}`;
    event.preventDefault();
    axios.post(currentVideo, {
      comment: event.target.text.value,
      timestamp: timeStr,
      name: "Mohan Moruge"
    });

    window.location.reload();
  };

  render() {
    return (
      <div className="newComment">
        <h4 className="newComment__num">
          {this.props.videos.comments.length} Comments
        </h4>
        <div className="newComment__new">
          <img id="Mohan" src={Mohan} alt="mohan" />
          <form className="newComment__new--comment" onSubmit={this.addComment}>
            <div id="setAside">
              <label>JOIN THE CONVERSATION</label>
              <textarea
                placeholder=" Add a new comment"
                id="inputComment"
                type="text"
                name="text"
                rows="7"
                cols="50"
              />
            </div>
            <button id="myButton" type="submit">
              COMMENT
            </button>
          </form>
        </div>
      </div>
    );
  }
}
