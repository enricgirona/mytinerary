import React, { Component } from "react";

import { getPageName } from "../store/actions/pageActions";

import { connect } from "react-redux";

import Logout from "../components/logout.js";

class Profile extends Component {
  componentDidMount() {
    this.props.getPageName("Profile");
  }
  render() {
    if (this.props.user) {
      var username = this.props.user.name;
      var usermail = this.props.user.email;
      var userpic = this.props.user.image;
    }
    return (
      <div className="main-container">
        <div className="profile">
          <img rel="preload" className="profile-pic" src={userpic} alt="profile-pic"></img>
          <p>{username}</p>
          <p>{usermail}</p>
        </div>
        <Logout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { getPageName })(Profile);
