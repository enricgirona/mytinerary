import { connect } from "react-redux";

import React, { Component } from "react";

import { login } from "../store/actions/authActions";

import { clearErrors } from "../store/actions/errorActions";

import { getPageName } from "../store/actions/pageActions";

import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: ""
  };

  componentDidMount() {
    this.props.getPageName("Login");
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    this.props.login(user);
  };

  render() {
    return (
      <div className="main">
        <div className="inner">
          {this.state.msg ? <p>{this.state.msg}</p> : null}
          <form className="form" onSubmit={this.onSubmit}>
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
            <label>Password</label>
            <input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} />
            <button className="button1">Login</button>

            <button className="button1">
              <a href="http://localhost:5000/auth/google">Login with Google</a>
            </button>
          </form>

          <div className="button-container">
            <NavLink to="/register">
              <button className="button1">
                <div href="#">Create New Account</div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(mapStateToProps, { getPageName, login, clearErrors })(Login);
