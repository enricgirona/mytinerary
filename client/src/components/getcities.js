import React from "react";

export default function getcities(props) {
  return (
    <div className="citiesContainer">
      {props.cities.map(city => (
        <a href={"/cities/" + city.name} key={city._id}>
          <div className="city">
            <p>{city.name}</p>
            <p className="country">{city.country}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
