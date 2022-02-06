import {
  START_GET_RELEASES,
  GET_RELEASES_SUCCESS,
  GET_RELEASES_FAILURE,
} from "../types";

const initialState = {
  releases: [],
  loading: false,
  error: false,
  cachedResults: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case START_GET_RELEASES:
      return {
        ...state,
        loading: true,
        error: false,
        releases: [],
      };
    case GET_RELEASES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        releases: action.payload,
      };
    case GET_RELEASES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        releases: [],
      };
    default:
      return { ...state };
  }
}
