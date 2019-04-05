import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInput = this.onInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInput(e) {
    this.setState({ term: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.getVideos(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
