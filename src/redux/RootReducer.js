import { combineReducers } from "redux";
import UserReducer from "./user/UserReducer";
import CartReducer from "./cart/CardReducer";

export default combineReducers({
  user: UserReducer,
  cart: CartReducer,
});
