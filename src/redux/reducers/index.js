import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
const reducers = combineReducers({
  allReducers: productReducer,
});

export default reducers;
