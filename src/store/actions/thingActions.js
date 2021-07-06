import instance from "./instance";
import { FETCH_TREASURE, FETCH_GARBAGE } from "../actions/types";

export const fetchTreasures = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/treasures");
      dispatch({
        type: FETCH_TREASURE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchGarbages = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/garbages");
      dispatch({
        type: FETCH_GARBAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
