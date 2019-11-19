import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";
import activitiesReducer from "./activityReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  activities: activitiesReducer
});

export default rootReducer;
