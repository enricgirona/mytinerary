import React, { Component } from "react";

import { connect } from "react-redux";

import Activities from "../components/activities";

import { addFavorite } from "../store/actions/authActions";

class getitineraries extends Component {
  handleClick = id => {
    if (this.props.activities.activities.filter(activity => activity.itinerary_id === id).length === 0) {
    }
    document.getElementById(id).classList.add("open");
  };
  closeClick = id => {
    document.getElementById(id).classList.remove("open");
  };

  render() {
    const { activities } = this.props.activities;
    let favorites;
    let userid;
    if (this.props.user) {
      favorites = this.props.user.favorites;
      userid = this.props.user._id;
    } else {
      favorites = [];
    }
    return (
      <div className="list">
        {this.props.itineraries.map(itinerary => (
          <div key={itinerary._id} id={itinerary._id}>
            <div key={itinerary._id} className="list-item">
              <div className="itinerary-title" onClick={() => this.handleClick(itinerary._id)}>
                <p className="title">{itinerary.title}</p>
                <p className="price">{itinerary.price}</p>
              </div>
              <div className="card-collpase">
                <div className="itinerary-info-container">
                  <p className="itinerary-info">
                    <strong>Rating:</strong> {itinerary.rating}
                  </p>
                  <p className="itinerary-info">
                    <strong>Duration:</strong> {itinerary.duration}
                  </p>
                  <div className="close-button" onClick={() => this.closeClick(itinerary._id)}>
                    <ion-icon name="close"></ion-icon>
                  </div>
                </div>

                {itinerary.images ? (
                  <div className="slider">
                    {itinerary.images.map(image => (
                      <div className="slider-img" key={image}>
                        <img src={image} alt="sliderpic"></img>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="itinerary-info-container">
                  <Activities activities={activities.filter(activity => activity.itinerary_id === itinerary._id)} />
                  {favorites.includes(itinerary._id) ? (
                    <ion-icon name="ios-heart"></ion-icon>
                  ) : (
                    <ion-icon name="ios-heart-empty" onClick={() => this.props.addFavorite(userid, itinerary._id)}></ion-icon>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { addFavorite })(getitineraries);
