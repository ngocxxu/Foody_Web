import { GET_PRODUCT_LIST_DATA } from "../redux/consts/const";
import commerce from "../services/settings";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const {data} = await commerce.products.list();
      if (data) {
        dispatch({
          type: GET_PRODUCT_LIST_DATA,
          payload: data,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };
};
