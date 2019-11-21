import axios from "axios";

import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: "USER_LOADING" });

  const token = getState().auth.token;
  const config = {
    header: {
      "Content-type": "application/json"
    }
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  axios
    .get("/auth/user", config)
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

export default loadUser;
