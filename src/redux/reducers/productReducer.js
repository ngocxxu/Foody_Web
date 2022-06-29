import {
  GET_PRODUCT_LIST_DATA,
  GET_PRODUCT_SALE_LIST_DATA,
  PRICE_LOW_HIGH_SEARCH,
} from '../consts/const';

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

    case PRICE_LOW_HIGH_SEARCH:
      const newDataProductList = [...state.dataProductList];

      // Sort còn bị sai do dính Discount
      const sortLowHighPrice = newDataProductList.sort(
        (productBefore, productAfter) =>
          productBefore.price.raw - productAfter.price.raw
      );
      
      state.dataProductList = sortLowHighPrice

      return { ...state };

    default:
      return state;
  }
};
