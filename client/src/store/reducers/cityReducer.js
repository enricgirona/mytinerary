const cityReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CITIES":
      return state;
    case "ADD_CITY":
      return state + 1;
    default:
      return state;
  }
};

export default cityReducer;
