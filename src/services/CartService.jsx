import { openNotificationWithIcon } from '../components/Notifications/Notifications';
import {
  CREATE_CART,
  GET_CART,
  OFF_BUTTON_LAZY_LOADING, ON_BUTTON_LAZY_LOADING
} from '../redux/consts/const';
import { http } from './settings';

export const createCart = () => {
  return async (dispatch) => {
    try {
      const { data } = await http.get('/carts');
      if (data) {
        Promise.all([
          dispatch({
            type: CREATE_CART,
            payload: data,
          }),
        ]);
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const getCart = () => {
  return async (dispatch) => {
    try {
      const { data } = await http.get('/carts/cart_mOVKl4AEZKwprR');
      if (data) {
        Promise.all([
          dispatch({
            type: GET_CART,
            payload: data,
          }),
        ]);
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const addProductToCart = (params) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_BUTTON_LAZY_LOADING,
      });
      const { data } = await http.post('/carts/cart_mOVKl4AEZKwprR', params);
      if (data) {
        Promise.all([
          dispatch(getCart()),
          dispatch({
            type: OFF_BUTTON_LAZY_LOADING,
          }),
        ]);
        openNotificationWithIcon('success')
      }
    } catch (error) {
      openNotificationWithIcon('error')
      console.log({ error });
    }
  };
};

export const deleteProductToCart = (line_item_id) => {
  return async (dispatch) => {
    try {
      const { data } = await http.delete(
        `/carts/cart_mOVKl4AEZKwprR/items/${line_item_id}`
      );
      if (data) {
        dispatch(getCart());
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const updateProductToCart = (quantity, line_item_id) => {
  return async (dispatch) => {
    try {
      const { data } = await http.put(
        `/carts/cart_mOVKl4AEZKwprR/items/${line_item_id}`,
        { quantity: quantity }
      );
      if (data) {
        dispatch(getCart());
      }
    } catch (error) {
      console.log({ error });
    }
  };
};
