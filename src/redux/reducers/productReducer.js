import {
  GET_PRODUCT_LIST_DATA,
  GET_PRODUCT_SALE_LIST_DATA,
  PRICE_HIGH_LOW_SEARCH,
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

      const sortLowHighPrice = newDataProductList.sort(
        (productBefore, productAfter) =>
          productBefore.price.raw - productAfter.price.raw
      );

      state.dataProductList = sortLowHighPrice;

      return { ...state };

    case PRICE_HIGH_LOW_SEARCH:
      state.dataProductList = [...state.dataProductList].sort(
        (productBefore, productAfter) =>
        productAfter.price.raw - productBefore.price.raw
      );
      return { ...state };

    default:
      return state;
  }
};
