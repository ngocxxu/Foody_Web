import {
  GET_CHECKOUT_TOKEN,
  GET_LIST_COUNTRIES,
  GET_LIST_SUB_COUNTRY,
  GET_SHIPPING_METHOD,
} from '../redux/consts/const';
import commerce, { http } from '../services/settings';

export const getCheckoutToken = () => {
  return async (dispatch) => {
    try {
      const dataToken = await commerce.cart.id('cart_mOVKl4AEZKwprR')
      console.log(dataToken)
      const { data } = await http.get('/checkouts/cart_mOVKl4AEZKwprR', { type: 'cart' });
      if (data) {
        console.log({data});
        dispatch({
          type: GET_CHECKOUT_TOKEN,
          payload: data,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const getListCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await http.get('/services/locale/countries');
      if (data) {
        dispatch({
          type: GET_LIST_COUNTRIES,
          payload: data,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const getListSubCountry = (country_code) => {
  return async (dispatch) => {
    try {
      const { data } = await http.get(
        `/services/locale/${country_code}/subdivisions`
      );
      if (data) {
        console.log({ data });
        Promise.all([
          dispatch({
            type: GET_LIST_SUB_COUNTRY,
            payload: data,
          }),
        ]);
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const getShippingMethods = (checkout_token, params) => {
  return async (dispatch) => {
    console.log({params})
    try {
      const { data } = await http.get(
        `/checkouts/${checkout_token}/helper/shipping_options`,
        params
      );
      console.log({ data });
      if (data) {
        dispatch({
          type: GET_SHIPPING_METHOD,
          payload: data,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };
};
