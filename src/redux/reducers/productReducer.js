import { GET_PRODUCT_LIST_DATA, GET_PRODUCT_SALE_LIST_DATA } from "../consts/const";

const initialState = {
  dataProductList: [],
  dataProductSaleList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_DATA:
      state.dataProductList = action.payload;
      return { ...state };

    case GET_PRODUCT_SALE_LIST_DATA:
      state.dataProductSaleList = action.payload;
      return { ...state };

    default:
      return state;
  }
};
