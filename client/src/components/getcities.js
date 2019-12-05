import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import GetItineraries from "../components/getitineraries";

import { fetchAllItineraries } from "../store/actions/itineraryActions";

class getcities extends React.Component {
  componentDidMount() {
    this.props.fetchAllItineraries();
  }

  render() {
    const { itineraries } = this.props.itineraries;
    return (
      <div className="inner-cities">
        {this.props.cities.map(city => (
          <NavLink to={"#"} key={city._id}>
            <div className="card">
              <div className="inner-card">
                <img src={city.img} alt={city.name}></img>
                <p className="card-subtitle">{city.country.toUpperCase()}</p>
                <p className="card-title">{city.name}</p>
              </div>
              <GetItineraries itineraries={itineraries.filter(itinerary => itinerary.city === city.name)} />
            </div>
          </NavLink>
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

export default connect(mapStateToProps, { fetchAllItineraries })(getcities);
