import React from "react";

export default function getcities(props) {
  return (
    <div className="citiesContainer">
      {props.cities.map(city => (
        <div key={city._id} className="city">
          <p>{city.name}</p>
          <p className="country">{city.country}</p>
        </div>
      ))}
    </div>
  );
}
