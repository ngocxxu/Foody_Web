import { createStore, combineReducers, applyMiddleware } from "redux";
import { menuReducer } from './reducers/menuReducer'
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  menuReducer: menuReducer,
  userReducer: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

