import {
  START_GET_COLLECTION,
  GET_COLLECTION_SUCCESS,
  GET_COLLECTION_FAILURE,
} from "../types";

import { getCollection } from "../../services/apiService";

export const startGetCollection = () => ({
  type: START_GET_COLLECTION,
});

export const getCollectionSuccess = (releases) => ({
  type: GET_COLLECTION_SUCCESS,
  payload: releases,
});

export const getCollectionFailure = (error) => ({
  type: GET_COLLECTION_FAILURE,
  payload: error,
});

export function getCollectionAction(filter) {
  return async (dispatch) => {
    dispatch(startGetCollection());
    try {
      const response = await getCollection(filter);
      dispatch(getCollectionSuccess(response.data));
    } catch (error) {
      dispatch(getCollectionFailure(error));
    }
  };
}
