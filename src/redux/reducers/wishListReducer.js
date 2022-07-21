import {
  ADD_WISH_LIST,
  DELETE_WISH_LIST,
  EMPTY_WISH_LIST,
} from '../consts/const';

const initialState = {
  wishListCart: [],
};

export const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WISH_LIST:
      state.wishListCart = [...state.wishListCart, action.payload];
      return { ...state };

    case DELETE_WISH_LIST:
      state.wishListCart = [...state.wishListCart].filter(
        (item) => item.id !== action.productId
      );
      return { ...state };

    case EMPTY_WISH_LIST:
      state.wishListCart = [];
      return { ...state };

    default:
      return state;
  }
};
