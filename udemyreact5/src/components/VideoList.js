import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    const VideoRender = this.props.videos.map(video => {
      return (
        <VideoItem
          className="item"
          video={video}
          getSelected={this.props.getSelected}
        />
      );
    });
    return <div className="ui relaxed divided list">{VideoRender}</div>;
  }
}

export default VideoList;
