import React from "react";

export default function getitineraries(props) {
  return (
    <div className="citiesContainer">
      {props.itineraries.map(itinerary => (
        <div className="city" key={itinerary._id}>
          <p>{itinerary.title}</p>
          <p className="country">{itinerary.city}</p>
        </div>
      ))}
    </div>
  );
}
