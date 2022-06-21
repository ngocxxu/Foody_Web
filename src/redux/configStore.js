import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { menuReducer } from "./reducers/menuReducer";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { othersReducer } from "./reducers/othersReducer";

const middleware = [ thunk ];

const rootReducer = combineReducers({
  menuReducer: menuReducer,
  userReducer: userReducer,
  productReducer: productReducer,
  othersReducer: othersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));
