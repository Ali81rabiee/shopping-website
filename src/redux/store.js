import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { products, oneProduct, singUp } from "./reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products,
  oneProduct,
  singUp,
});
const middleWare = [thunk];
const initialState = {};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare),
);

export default store;
