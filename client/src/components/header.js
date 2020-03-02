import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { NavLink } from "react-router-dom";
class header extends Component {
  componentDidUpdate() {
    if (this.props.currentpage === "Explore") {
      var buttonback = document.getElementById("goback");
      buttonback.className = "hide-back";
    } else {
      buttonback = document.getElementById("goback");
      buttonback.className = "no-hide";
    }
  }

  render() {
    let pic;
    if (this.props.user) {
      if (this.props.user.image) {
        var userpic = this.props.user.image;
        pic = (
          <div className="toggle">
            <img className="small-profile-pic" alt="profile-pic" src={userpic}></img>
          </div>
        );
      } else {
        pic = (
          <div>
            <ion-icon name="ios-contact" />
          </div>
        );
      }
    } else {
      pic = (
        <div>
          <ion-icon name="ios-contact" />
        </div>
      );
    }
    return (
      <div className="header">
        <div className="inner-header">
          <NavLink id="goback" to={"#"} onClick={() => this.props.history.goBack()}>
            <div className="user-profile-pic">
              <ion-icon name="ios-arrow-back"></ion-icon>
            </div>
          </NavLink>
          <p className="page-title">{this.props.currentpage}</p>
          <NavLink to={this.props.logged ? "/profile" : "/login"}>{pic}</NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentpage: state.currentpage.currentpage,
    user: state.auth.user,
    logged: state.auth.isAuthenticated
  };
};

export default withRouter(connect(mapStateToProps, null)(header));
