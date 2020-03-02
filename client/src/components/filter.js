import React, { Component } from "react";

export default class filter extends Component {
  getFilter = e => {
    this.props.changeHandler({ search: e.target.value.toLowerCase() });
  };
  render() {
    return (
      <div className="filter">
        <input
          label="search"
          type="text"
          className="inputField"
          onChange={this.getFilter}
          placeholder="type here to filter..."
        ></input>
      </div>
    );
  }
}
