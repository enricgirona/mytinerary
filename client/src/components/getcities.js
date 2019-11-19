import React from "react";
import { NavLink } from "react-router-dom";

export default function getcities(props) {
  return (
    <div className="inner">
      {props.cities.map(city => (
        <NavLink to={"/itineraries/" + city.name} key={city._id}>
          <div className="card">
            <p className="card-subtitle">{city.country.toUpperCase()}</p>
            <p className="card-title">{city.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
