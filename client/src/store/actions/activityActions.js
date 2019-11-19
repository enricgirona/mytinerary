import axios from "axios";

export const fetchActivities = itineraryID => dispatch => {
  axios.get("/activities/" + itineraryID).then(res => {
    dispatch({
      type: "GET_ACTIVITIES",
      payload: res.data
    });
  });
};
