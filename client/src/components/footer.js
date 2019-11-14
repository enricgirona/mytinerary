import React from "react";
import { NavLink } from "react-router-dom";
export default class Footer extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cities"}>Cities</NavLink>
      </div>
    );
  }
}
