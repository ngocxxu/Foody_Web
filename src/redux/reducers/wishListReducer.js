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
      return [...state.wishListCart, action.payload];

    case DELETE_WISH_LIST:
      return [...state.wishListCart].filter(
        (item) => item.id !== action.productId
      );

    case EMPTY_WISH_LIST:
      state.wishListCart = [];
      return { ...state};

    default:
      return state;
  }
};
