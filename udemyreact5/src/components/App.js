import React from "react";
import axios from "axios";
import Searchbar from "./SearchBar";
import VideoList from "./VideoList";
import VideoSelected from "./VideoSelected";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selected: {} };
    this.getVideos = this.getVideos.bind(this);
    this.getSelected = this.getSelected.bind(this);
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
  getSelected(video) {
    this.setState({ selected: video });
  }
  render() {
    return (
      <div className="ui container">
        <Searchbar getVideos={this.getVideos} />
        <VideoSelected video={this.state.selected} />
        <VideoList videos={this.state.videos} getSelected={this.getSelected} />
      </div>
    );
  }
}
export default App;
