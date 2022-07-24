import { ADD_REVIEW, GET_REVIEW } from '../consts/const';

const initialState = {
  reviewList: [],
};

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      state.reviewList = action.payload;
      return { ...state };

    case GET_REVIEW:
      state.reviewList = action.payload;
      return { ...state };

    default:
      return state;
  }
};
