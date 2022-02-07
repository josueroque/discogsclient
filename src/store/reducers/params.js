import { SET_PARAMS } from "../types";

const initialState = {
  page: 1,
  pages: 0,
  per_page: 5,
  artist: "",
  album: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PARAMS:
      return {
        ...state,
        page: action.payload.page,
        pages: action.payload.pages,
        per_page: action.payload.per_page,
        artist: action.payload.title || "",
        album: action.payload.release_title || "",
      };
    default:
      return { ...state };
  }
}
