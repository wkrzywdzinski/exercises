import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    console.log(this.props.videos);
    const VideoRender = this.props.videos.map(video => {
      return <VideoItem video={video} />;
    });
    return (
      <div>
        <h1>videos:</h1>
        {VideoRender}
      </div>
    );
  }
}

export default VideoList;
