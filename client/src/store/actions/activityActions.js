import axios from "axios";

export const fetchActivities = itineraryID => dispatch => {
  axios.get("/activities/" + itineraryID).then(res => {
    dispatch({
      type: "GET_ACTIVITIES",
      payload: res.data
    });
  });
};

export const fetchAllActivities = () => dispatch => {
  axios.get("/activities/all").then(res => {
    dispatch({
      type: "GET_ALL_ACTIVITIES",
      payload: res.data
    });
  });
};
