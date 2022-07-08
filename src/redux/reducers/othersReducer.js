import { ON_LAZY_LOADING, OFF_LAZY_LOADING, ON_BUTTON_LAZY_LOADING, OFF_BUTTON_LAZY_LOADING } from '../consts/const';

const initialState = {
  isPending: false,
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

    default:
      return state;
  }
};
