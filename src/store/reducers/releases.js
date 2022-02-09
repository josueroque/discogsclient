import {
  START_GET_RELEASES,
  GET_RELEASES_SUCCESS,
  GET_RELEASES_FAILURE,
  START_GET_USER_RELEASES,
  GET_USER_RELEASES_SUCCESS,
  GET_USER_RELEASES_FAILURE,
  SET_RELEASE,
} from "../types";

const initialState = {
  releases: [],
  userReleases: [],
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
    case START_GET_USER_RELEASES:
      return {
        ...state,
        loading: true,
        error: false,
        userReleases: [],
      };
    case GET_USER_RELEASES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        pages: action?.payload?.pagination?.pages,
        userReleases: action.payload.results,
      };
    case GET_USER_RELEASES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        userReleases: [],
      };

    default:
      return { ...state };
  }
}
