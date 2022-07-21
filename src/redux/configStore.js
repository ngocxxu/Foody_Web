import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { menuReducer } from "./reducers/menuReducer";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { othersReducer } from "./reducers/othersReducer";
import { shopReducer } from "./reducers/shopReducer";
import { cartReducer } from "./reducers/cartReducer";
import { checkoutReducer } from "./reducers/checkoutReducer";
import { wishListReducer } from "./reducers/wishListReducer";

const middleware = [ thunk ];

const rootReducer = combineReducers({
  menuReducer: menuReducer,
  userReducer: userReducer,
  productReducer: productReducer,
  othersReducer: othersReducer,
  shopReducer: shopReducer,
  cartReducer: cartReducer,
  checkoutReducer: checkoutReducer,
  wishListReducer: wishListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));
