import { SET_PARAMS } from "../types";

export const setParams = (params) => ({
  type: SET_PARAMS,
  payload: params,
});

export function setParamsAction(params) {
  return async (dispatch) => {
    try {
      dispatch(setParams(params));
    } catch (error) {
      console.log(error);
    }
  };
}
