import { ON_LAZY_LOADING, OFF_LAZY_LOADING, ON_BUTTON_LAZY_LOADING, OFF_BUTTON_LAZY_LOADING, ON_CART_LAZY_LOADING, OFF_CART_LAZY_LOADING, ON_SHOPPING_CART_LAZY_LOADING, OFF_SHOPPING_CART_LAZY_LOADING } from '../consts/const';

const initialState = {
  isPendingCart: false,
  isShoppingCart: false,
  isLazyLoading: false,
  isButtonLazyLoading: false,
};

export const othersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LAZY_LOADING:
      state.isLazyLoading = true;
      return { ...state };

    case OFF_LAZY_LOADING:
      state.isLazyLoading = false;
      return { ...state };

    case ON_BUTTON_LAZY_LOADING:
      state.isButtonLazyLoading = true;
      return { ...state };

    case OFF_BUTTON_LAZY_LOADING:
      state.isButtonLazyLoading = false;
      return { ...state };

    case ON_CART_LAZY_LOADING:
      state.isPendingCart = true;
      return { ...state };

    case OFF_CART_LAZY_LOADING:
      state.isPendingCart = false;
      return { ...state };

    case ON_SHOPPING_CART_LAZY_LOADING:
      state.isShoppingCart = true;
      return { ...state };

    case OFF_SHOPPING_CART_LAZY_LOADING:
      state.isShoppingCart = false;
      return { ...state };

    default:
      return state;
  }
};
