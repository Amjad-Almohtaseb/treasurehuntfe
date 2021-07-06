import { FETCH_GARBAGE, FETCH_TREASURE } from "../actions/types";

const initialState = {
  treasures: [],
  garbages: [],
};

const thingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TREASURE:
      return {
        ...state,
        treasures: action.payload,
      };

    case FETCH_GARBAGE:
      return {
        ...state,
        garbages: action.payload,
      };
    default:
      return state;
  }
};

export default thingReducer;
