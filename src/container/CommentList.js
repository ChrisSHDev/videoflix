import React, { Component } from "react";
import Comments from "../component/Comments";
import convertTime from "../my-func/ConvertTime";

class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.videos.comments.map(content => (
          <Comments
            Name={content.name}
            Date={convertTime(content.timestamp)}
            Comment={content.comment}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;
