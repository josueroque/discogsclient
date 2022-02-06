import { combineReducers } from "redux";
import releasesReducer from "./releases";

export default combineReducers({
  releases: releasesReducer,
});
