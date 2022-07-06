import { CREATE_CART, GET_CART } from "../redux/consts/const";
import { http } from "./settings";


export const createCart = () => {
  return async (dispatch) => {
    try {
      const { data } = await http.get('/carts');
      if (data) 
      {
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
      if (data) 
      {
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
