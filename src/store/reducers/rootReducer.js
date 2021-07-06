import { combineReducers } from "redux";
import thingReducer from "./thingReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  thing: thingReducer,

  user: authReducer,
});

export default rootReducer;
