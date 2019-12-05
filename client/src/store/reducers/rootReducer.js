import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";
import activitiesReducer from "./activityReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  activities: activitiesReducer,
  errors: errorReducer,
  auth: authReducer,
  currentpage: pageReducer
});

export default rootReducer;
