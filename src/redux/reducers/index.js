import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
const reducers = combineReducers({
  allReducers: productReducer,
  product: selectedProductReducer,
});

export default reducers;
