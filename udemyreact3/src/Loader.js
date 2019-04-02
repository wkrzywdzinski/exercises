import React, { Component } from "react";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{this.props.message}</div>
      </div>
    );
  }
}
Loader.defaultProps = {
  message: "Loading"
};
export default Loader;
