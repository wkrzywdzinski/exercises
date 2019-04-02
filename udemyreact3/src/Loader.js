import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div class="ui active dimmer">
        <div class="ui big text loader">Loading</div>
      </div>
    );
  }
}

export default Loader;
