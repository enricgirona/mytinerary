import React from "react";
import { NavLink } from "react-router-dom";
export default class Footer extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="inner-header">
          <NavLink to={"/"}>
            <ion-icon name="ios-compass"></ion-icon>
            <p>Explore</p>
          </NavLink>
          <NavLink to={"/cities"}>
            <ion-icon name="ios-pin"></ion-icon>
            <p>Cities</p>
          </NavLink>
          <NavLink to={"/itineraries"}>
            <ion-icon name="ios-map"></ion-icon>
            <p>Itineraries</p>
          </NavLink>
          <NavLink to={"/"}>
            <ion-icon name="ios-heart"></ion-icon>
            <p>Favorites</p>
          </NavLink>
        </div>
      </div>
    );
  }
}
