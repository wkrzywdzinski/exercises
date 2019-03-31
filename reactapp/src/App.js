import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import Posts from "./components/Posts.js";
import Postform from "./components/Postform.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Postform />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
