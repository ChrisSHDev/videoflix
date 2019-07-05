import React, { Component } from "react";
import Mercury from "../assets/images/e1e1e1.png";

class Comments extends Component {
  render() {
    return (
      <div className="users">
        <img className="users__mercury" src={Mercury} alt="mercury" />
        <div className="users__comment">
          <div className="users__comment--status">
            <div id="name">{this.props.Name}</div>
            <div id="date">{this.props.Date}</div>
          </div>
          <div className="users__comment--mention">{this.props.Comment}</div>
        </div>
      </div>
    );
  }
}

export default Comments;
