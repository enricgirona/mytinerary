import axios from "axios";

let activecity = "Barcelona";

export const fetchItineraries = () => dispatch => {
  axios.get("/cities/" + activecity).then(res => {
    dispatch({
      type: "GET_ITINERARIES",
      payload: res.data
    });
  });
};
