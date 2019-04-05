import React from "react";
import axios from "axios";
import Searchbar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    this.getVideos = this.getVideos.bind(this);
  }
  getVideos(term) {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAvHl9j28ydBt9rdJWDPmA2WG37nSANF7E",
          q: term
        }
      })
      .then(resp => {
        this.setState({ videos: resp.data.items });
      });
  }
  render() {
    return (
      <div className="ui container">
        <Searchbar getVideos={this.getVideos} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
