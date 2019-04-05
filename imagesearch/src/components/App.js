import React from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  onSearchSubmit(term) {
    // alternatively const response = await axios...
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: `Client-ID 59842ae6823fed0b691cc0a28bb577eba306fc8cea6c64e1b2b02cf1b8497f01`
        }
      })
      .then(resp => {
        this.setState({ images: resp.data.results });
      });
  }
  render() {
    return (
      <div className="ui container">
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
