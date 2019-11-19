import axios from "axios";

export const fetchItineraries = activeCity => dispatch => {
  axios.get("/itineraries/" + activeCity).then(res => {
    dispatch({
      type: "GET_ITINERARIES",
      payload: res.data
    });
  });
};

export const fetchAllItineraries = () => dispatch => {
  axios.get("/itineraries/all").then(res => {
    dispatch({
      type: "GET_ITINERARIES",
      payload: res.data
    });
  });
};
