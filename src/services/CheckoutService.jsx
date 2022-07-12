import { GET_LIST_COUNTRIES, GET_LIST_SUB_COUNTRY } from '../redux/consts/const';
import { http } from '../services/settings';

export const getListCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await http.get('/services/locale/countries');
      if (data) {
        dispatch({
          type: GET_LIST_COUNTRIES,
          payload: data,
        })
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const getListSubCountry = (country_code) => {
  return async (dispatch) => {
    try {
      const { data } = await http.get(`/services/locale/${country_code}/subdivisions`);
      if (data) {
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
