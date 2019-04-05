import React, { Component } from "react";
import "./VideoItem.css";

class VideoItem extends Component {
  render() {
    const video = this.props.video;
    return (
      <div
        key={video.id.videoId}
        className="video-item item"
        onClick={() => {
          this.props.getSelected(video);
        }}
      >
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
