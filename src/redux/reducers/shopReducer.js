import { AMOUNT_KIND_FOOD, SET_RANGE_PRICE, LIST_CATEGORY, IS_RELATED } from '../consts/const';

const initialState = {
  amountKindFood: 0,
  rangePrice: [0, 100],
  listCategory: [],
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case AMOUNT_KIND_FOOD:
      state.amountKindFood = action.payload;
      return { ...state };

    case SET_RANGE_PRICE:
      state.rangePrice = action.payload;
      return { ...state };

    case LIST_CATEGORY:
      state.listCategory = action.payload;
      return { ...state };

    default:
      return state;
  }
};
