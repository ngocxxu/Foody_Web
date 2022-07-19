import {
  GET_PRODUCT_LIST_DATA,
  GET_PRODUCT_SALE_LIST_DATA,
  LIST_CATEGORY,
  OFF_LAZY_LOADING,
  ON_LAZY_LOADING,
} from '../redux/consts/const';
import commerce, { http } from '../services/settings';

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_LAZY_LOADING,
      });
      const { data } = await commerce.products.list();
      if (data) {
        Promise.all([
          dispatch({
            type: GET_PRODUCT_LIST_DATA,
            payload: data,
          }),
          dispatch({
            type: OFF_LAZY_LOADING,
          }),
        ]);
      }
    } catch (error) {
      console.log({ error });
      dispatch({
        type: OFF_LAZY_LOADING,
      })
    }
  };
};

export const getAllSaleProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_LAZY_LOADING,
      });
      const { data } = await http.get('/discounts');
      if (data) {
        Promise.all([
          dispatch({
            type: GET_PRODUCT_SALE_LIST_DATA,
            payload: data,
          }),
          dispatch({
            type: OFF_LAZY_LOADING,
          }),
        ]);
      }
    } catch (error) {
      console.log({ error });
      dispatch({
        type: OFF_LAZY_LOADING,
      })
    }
  };
};

export const getListCategory = () => {
  return async (dispatch) => {
    try {
      // dispatch({
      //   type: ON_LAZY_LOADING,
      // });
      const { data } = await http.get('/categories');
      if (data) {
        Promise.all([
          dispatch({
            type: LIST_CATEGORY,
            payload: data,
          }),
          // dispatch({
          //   type: OFF_LAZY_LOADING,
          // }),
        ]);
      }
    } catch (error) {
      console.log({ error });
    }
  };
};
