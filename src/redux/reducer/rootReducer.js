import { combineReducers } from "redux";
import openReducer from "./openReducer";
import reducer from "./UserReducer";

const rootReducer = combineReducers({
  user: reducer,
  openSibar: openReducer,
});

export default rootReducer;
