import React, { Component } from "react";

import { logout } from "../store/actions/authActions";

import { connect } from "react-redux";

class Logout extends Component {
  render() {
    return (
      <div>
        <button className="button" onClick={this.props.logout} href="#">
          Logout
        </button>
      </div>
    );
  }
}

export default connect(null, { logout })(Logout);
