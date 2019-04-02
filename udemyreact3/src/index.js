import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
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
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> ERROR: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Loader message="please accept location request" />;
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default App;
ReactDOM.render(<App />, document.querySelector("#root"));
