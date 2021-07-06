import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { fetchGarbages } from "./actions/thingActions";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchGarbages());
store.dispatch(checkForToken());

export default store;
