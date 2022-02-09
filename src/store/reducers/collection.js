import {
  START_GET_COLLECTION,
  GET_COLLECTION_SUCCESS,
  GET_COLLECTION_FAILURE,
} from "../types";

const initialState = {
  collection: {},
  loading: false,
  error: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case START_GET_COLLECTION:
      return {
        ...state,
        loading: true,
        error: false,
        collection: {},
      };
    case GET_COLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        COLLECTION: action.payload,
      };
    case GET_COLLECTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        collection: {},
      };
    default:
      return { ...state };
  }
}
