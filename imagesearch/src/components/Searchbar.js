import React, { Component } from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  onInputChange(e) {
    this.setState({ term: e.target.value });
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label>IMAGE SEARCH</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            {/* alternative syntax >>    <input type="text" onChange={(e)=> console.log(e.target.value);} /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
