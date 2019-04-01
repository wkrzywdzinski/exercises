import React from "react";
import ReactDOM from "react-dom";

const buttonText = "";
const App = () => {
  return (
    <div>
      <div>
        <label for="name">name</label>
        <input id="name" />
        <button style={{ backgroundColor: "blue", color: "white" }}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
