import axios from "axios";

export const fetchCities = () => dispatch => {
  axios.get("/cities/all").then(res => {
    dispatch({
      type: "GET_CITIES",
      payload: res.data
    });
  });
};
