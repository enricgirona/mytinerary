import React from "react";
import { NavLink } from "react-router-dom";

export default function getcities(props) {
  return (
    <div className="citiesContainer">
      {props.cities.map(city => (
        <NavLink to={"/itineraries/" + city.name} key={city._id}>
          <div className="city">
            <p>{city.name}</p>
            <p className="country">{city.country}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
