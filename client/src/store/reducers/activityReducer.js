const initialState = {
  activities: []
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: state.activities.concat(action.payload)
      };
    case "GET_ALL_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      };

    default:
      return state;
  }
};

export default activityReducer;
