import { CREATE_CART, GET_CART } from "../consts/const";

const initialState = {
  cart: {},
};

export const cartReducer= (state = initialState, action) => {
  switch (action.type) {

  case CREATE_CART:
    state.cart = action.payload;
    return { ...state };

  case GET_CART:
    state.cart = action.payload;
    return { ...state };

  default:
    return state
  }
};

