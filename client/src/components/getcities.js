import React from "react";
import { connect } from "react-redux";

import GetItineraries from "../components/getitineraries";

class getcities extends React.Component {
  render() {
    const { itineraries } = this.props.itineraries;
    return (
      <div className="inner-cities">
        {this.props.cities.map(city => (
          <div className="out-card" key={city._id}>
            <div className="card">
              <div className="inner-card">
                <img rel="preload" src={city.img} alt={city.name}></img>
                <p className="card-subtitle">{city.country.toUpperCase()}</p>
                <p className="card-title">{city.name}</p>
              </div>
              <GetItineraries itineraries={itineraries.filter(itinerary => itinerary.city === city.name)} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};

export default connect(mapStateToProps, null)(getcities);
