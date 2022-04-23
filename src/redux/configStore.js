import { createStore, combineReducers, applyMiddleware } from "redux";
import { menuReducer } from './reducers/menuReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  menuReducer: menuReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

