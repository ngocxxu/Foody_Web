import { ON_LAZY_LOADING, OFF_LAZY_LOADING } from '../consts/const';

const initialState = {
  isPending: false,
  isLazyLoading: false,
};

export const othersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LAZY_LOADING:
      state.isLazyLoading = true;
      return { ...state };

    case OFF_LAZY_LOADING:
      state.isLazyLoading = false;
      return { ...state };

    default:
      return state;
  }
};
