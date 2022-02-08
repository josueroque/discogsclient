import {
  START_GET_RELEASES,
  GET_RELEASES_SUCCESS,
  GET_RELEASES_FAILURE,
  SET_RELEASE,
} from "../types";

const initialState = {
  releases: [],
  release: {},
  loading: false,
  error: false,
  pages: 0,
  page: 1,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RELEASE:
      return {
        ...state,
        release: action.payload,
      };

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
        pages: action?.payload?.pagination?.pages,
        releases: action.payload.results,
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
