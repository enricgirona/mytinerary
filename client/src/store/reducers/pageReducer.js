const initialState = {
  currentpage: ""
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        currentpage: action.payload
      };

    default:
      return state;
  }
};

export default pageReducer;
