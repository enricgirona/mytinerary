import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class citylist extends React.Component {
  render() {
    return (
      <div className="list">
        {this.props.cities.map(city => (
          <NavLink to={"/itineraries/" + city.name} key={city._id}>
            <div className="list-item">
              <p className="title">{city.name}</p>
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

export default connect(mapStateToProps, null)(citylist);
