import { Navigate } from 'react-router-dom';
import {
  openNotificationWithIcon,
  updateCartNotification,
} from '../components/Notifications/Notifications';
import {
  CREATE_CART,
  GET_CART,
  OFF_BUTTON_LAZY_LOADING,
  OFF_CART_LAZY_LOADING,
  OFF_SHOPPING_CART_LAZY_LOADING,
  ON_BUTTON_LAZY_LOADING,
  ON_CART_LAZY_LOADING,
  ON_SHOPPING_CART_LAZY_LOADING,
} from '../redux/consts/const';
import commerce from './settings';

// Refresh Cart
export const createCart = () => {
  return async (dispatch) => {
    try {
      const data = await commerce.cart.refresh();
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

// Retrieve Cart
export const getCart = () => {
  return async (dispatch) => {
    try {
      const data = await commerce.cart.retrieve();
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

export const addProductToCart = (params, isBuyNow = false, navigate = null) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_BUTTON_LAZY_LOADING,
      });
      const data = await commerce.cart.add(params.id, params.quantity);
      if (data) {
        Promise.all([
          dispatch(getCart()),
          dispatch({
            type: OFF_BUTTON_LAZY_LOADING,
          }),
        ]);
        openNotificationWithIcon('success');
        if (isBuyNow) {
          navigate();
        }
      }
    } catch (error) {
      openNotificationWithIcon('error');
      console.log({ error });
      dispatch({
        type: OFF_BUTTON_LAZY_LOADING,
      });
    }
  };
};

export const deleteProductToCart = (line_item_id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_CART_LAZY_LOADING,
      });
      const data = await commerce.cart.remove(line_item_id);
      if (data) {
        Promise.all([
          dispatch(getCart()),
          dispatch({
            type: OFF_CART_LAZY_LOADING,
          }),
        ]);
      }
    } catch (error) {
      console.log({ error });
      dispatch({
        type: OFF_CART_LAZY_LOADING,
      });
    }
  };
};

export const empltyAllProductsToCart = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_CART_LAZY_LOADING,
      });
      const data = await commerce.cart.empty();
      if (data) {
        Promise.all([
          dispatch(getCart()),
          dispatch({
            type: OFF_CART_LAZY_LOADING,
          }),
        ]);
      }
    } catch (error) {
      console.log({ error });
      dispatch({
        type: OFF_CART_LAZY_LOADING,
      });
    }
  };
};

export const updateProductToCart = (quantity, line_item_id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_SHOPPING_CART_LAZY_LOADING,
      });
      const data = await commerce.cart.update(line_item_id, { quantity });
      if (data) {
        Promise.all([
          dispatch(getCart()),
          dispatch({
            type: OFF_SHOPPING_CART_LAZY_LOADING,
          }),
        ]);
        updateCartNotification('success');
      }
    } catch (error) {
      updateCartNotification('error');
      console.log({ error });
      dispatch({
        type: OFF_SHOPPING_CART_LAZY_LOADING,
      });
    }
  };
};
