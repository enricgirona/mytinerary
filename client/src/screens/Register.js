import { connect } from "react-redux";

import React, { Component } from "react";

import { register } from "../store/actions/authActions";

import { clearErrors } from "../store/actions/errorActions";

import { getPageName } from "../store/actions/pageActions";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: null
  };

  componentDidMount() {
    this.props.getPageName("New Account");
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
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
    this.props.clearErrors();
    e.preventDefault();

    const { name, email, password } = this.state;

    const newUser = {
      name,
      email,
      password
    };

    this.props.register(newUser);
  };

  render() {
    return (
      <div className="main">
        <div className="inner">
          {this.state.msg ? <p>{this.state.msg}</p> : null}
          <form className="form" onSubmit={this.onSubmit}>
            <label>Name</label>
            <input type="text" name="name" id="name" placeholder="Name" onChange={this.onChange} />
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
            <label>Password</label>
            <input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} />

            <button className="button1">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(mapStateToProps, { register, clearErrors, getPageName })(Register);
