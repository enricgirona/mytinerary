import React from "react";
import { NavLink } from "react-router-dom";
export default class Footer extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="inner-header">
          <NavLink to={"/"}>
            <ion-icon name="ios-home"></ion-icon>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/cities"}>
            <ion-icon name="ios-navigate"></ion-icon>
            <p>Cities</p>
          </NavLink>
          <NavLink to={"/itineraries"}>
            <ion-icon name="ios-map"></ion-icon>
            <p>Itineraries</p>
          </NavLink>
          <NavLink to={"/"}>
            <ion-icon name="ios-bonfire"></ion-icon>
            <p>Activities</p>
          </NavLink>
        </div>
      </div>
    );
  }
}
