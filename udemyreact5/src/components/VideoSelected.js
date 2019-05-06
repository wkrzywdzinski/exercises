import React, { Component } from "react";

class VideoSelected extends Component {
  render() {
    const video = this.props.video;
    if (!video.snippet) {
      return <div>loading</div>;
    } else {
      const url = `https://www.youtube.com/embed/${video.id.videoId}`;
      return (
        <div>
          <div className="ui embed">
            <iframe title="videoplayer" src={url} />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      );
    }
  }
}

export default VideoSelected;
