import { connect } from "react-redux";

import React, { Component } from "react";

import { login } from "../store/actions/authActions";

import { clearErrors } from "../store/actions/errorActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: ""
  };

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
          <form className="form" onSubmit={this.onSubmit}>
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
            <label>Password</label>
            <input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} />
            <button className="button">Login</button>
            {this.state.msg ? <p>{this.state.msg}</p> : null}
          </form>

          <div className="g-signin2" href="http://localhost:5000/auth/google"></div>
          <a href="http://localhost:5000/auth/google">Google</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
