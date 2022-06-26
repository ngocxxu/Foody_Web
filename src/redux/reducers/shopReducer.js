import { AMOUNT_KIND_FOOD, SET_RANGE_PRICE } from '../consts/const';

const initialState = {
  amountKindFood: 0,
  rangePrice: []
};

export const shopReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case AMOUNT_KIND_FOOD:
      state.amountKindFood = action.payload;
      return { ...state };

    case SET_RANGE_PRICE:
      state.rangePrice = action.payload;
      return { ...state };

    default:
      return state;
  }
};
