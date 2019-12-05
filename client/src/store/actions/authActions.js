import axios from "axios";

import { returnErrors } from "./errorActions";

export const register = ({ name, email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password });

  axios
    .post("/user", body, config)
    .then(res =>
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
      dispatch({
        type: "REGISTER_FAIL"
      });
    });
};

export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });

  axios
    .post("/auth", body, config)
    .then(res =>
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
      dispatch({
        type: "LOGIN_FAIL"
      });
    });
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: "USER_LOADING" });
  axios
    .get("/auth/user", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: "USER_LOADED",
        payload: res.data
      })
    )

    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: "AUTH_ERROR"
      });
    });
};

//! Setup config/headers and token
export const tokenConfig = getState => {
  //* Get token from localStorage
  const token = getState().auth.token;
  //* Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  //* If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};

export const logout = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};
