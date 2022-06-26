import { AMOUNT_KIND_FOOD } from '../consts/const';

const initialState = {
  amountKindFood: 0,
};

export const shopReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case AMOUNT_KIND_FOOD:
      state.amountKindFood = action.payload;
      return { ...state };

    default:
      return state;
  }
};
