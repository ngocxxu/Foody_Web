import { GET_PRODUCT_LIST_DATA } from "../consts/const";

const initialState = {
  dataProductList: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_DATA:
      state.dataProductList = action.payload;
      return { ...state };

    default:
      return state;
  }
};
