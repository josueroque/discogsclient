import { combineReducers } from "redux";
import releasesReducer from "./releases";
import paramsReducer from "./params";
import collectionReducer from "./collection";

export default combineReducers({
  releases: releasesReducer,
  params: paramsReducer,
  collection: collectionReducer,
});
