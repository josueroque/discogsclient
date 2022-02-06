import {
  START_GET_RELEASES,
  GET_RELEASES_SUCCESS,
  GET_RELEASES_FAILURE,
} from "../types";

import { getReleases } from "../../services/apiService";

export const startGetReleases = () => ({
  type: START_GET_RELEASES,
});

export const getReleasesSuccess = (releases) => ({
  type: GET_RELEASES_SUCCESS,
  payload: releases,
});

export const getReleasesFailure = (error) => ({
  type: GET_RELEASES_FAILURE,
  payload: error,
});

export function getReleasesAction(filter) {
  return async (dispatch) => {
    dispatch(startGetReleases());
    try {
      const response = await getReleases(filter);
      dispatch(getReleasesSuccess(response.data.results));
    } catch (error) {
      dispatch(getReleasesFailure(error));
    }
  };
}
