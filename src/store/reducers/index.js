import { combineReducers } from "redux";
import releasesReducer from "./releases";
import paramsReducer from "./params";

export default combineReducers({
  releases: releasesReducer,
  params: paramsReducer,
});
