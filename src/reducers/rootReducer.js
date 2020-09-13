import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import filterReducer from "./filterReducer";
import paginationReducer from "./paginationReducer";

const rootReducer = combineReducers({
  pagination: paginationReducer,
  products: productsReducer,
  filter: filterReducer
});

export default rootReducer;
