import React from "react";

import GetItineraries from "../components/getitineraries";

import { connect } from "react-redux";

import { getPageName } from "../store/actions/pageActions";

class Favorites extends React.Component {
  componentDidMount() {
    this.props.getPageName("Favorites");
  }

  render() {
    let favorites;
    if (this.props.user) {
      favorites = this.props.user.favorites;
    } else {
      favorites = [];
    }

    const { itineraries } = this.props.itineraries;
    const filtered = itineraries.filter(function(itinerary) {
      return favorites.find(favorite => favorite === itinerary._id);
    });

    return (
      <div className="main">
        {favorites[0] ? (
          <GetItineraries itineraries={filtered} />
        ) : (
          <div className="list">
            <div className="list-item">
              <p className="title">No favorites to display.</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { getPageName })(Favorites);
