import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import openReducer from "./createSlice/openSlice";

const rootReducer = combineReducers({
  openSibar: openReducer,
});

const stores = configureStore({
  reducer: rootReducer,
});

export default stores;
