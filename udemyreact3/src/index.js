import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
  // alternative for state initialisation:  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  // componentDidUpdate() {
  //   console.log("update");
  // }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> ERROR: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div> LATITUDE: {this.state.lat}</div>;
    } else {
      return <div>LOADING</div>;
    }
  }
}
export default App;
ReactDOM.render(<App />, document.querySelector("#root"));
