import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videos extends Component {
  render() {
    return (
      <div className="videos__list">
        <div className="videos__list--thumbnail">
          <Link to={`/videos/${this.props.id}`}>
            <img src={this.props.image} alt="thumbnail" />
          </Link>
        </div>
        <div className="videos__list--detail">
          <h4 id="title">{this.props.title}</h4>

          <h4 id="channel">{this.props.channel}</h4>
        </div>
      </div>
    );
  }
}
export default Videos;
