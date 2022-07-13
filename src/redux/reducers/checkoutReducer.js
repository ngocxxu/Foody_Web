import {
  GET_CHECKOUT_TOKEN,
  GET_LIST_COUNTRIES,
  GET_LIST_SUB_COUNTRY,
  GET_SHIPPING_METHOD,
} from '../consts/const';

const initialState = {
  listCountries: [],
  listSubCountry: [],
  shippingMethods: [],
  dataCheckoutToken: {},
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_COUNTRIES:
      let listCountriesObj = action.payload;
      let arrayCountries = [];
      for (const [key, value] of Object?.entries(listCountriesObj?.countries)) {
        arrayCountries.push({ key: `${key}`, value: `${value}` });
      }
      state.listCountries = arrayCountries;
      return { ...state };

    case GET_LIST_SUB_COUNTRY:
      let listSubCountryObj = action.payload;
      let arraySubCountry = [];
      for (const [key, value] of Object?.entries(
        listSubCountryObj?.subdivisions
      )) {
        arraySubCountry.push({ key: `${key}`, value: `${value}` });
      }
      state.listSubCountry = arraySubCountry;
      return { ...state };

    case GET_SHIPPING_METHOD:
      state.shippingMethods = action.payload;
      return { ...state };

    case GET_CHECKOUT_TOKEN:
      state.dataCheckoutToken = action.payload;
      return { ...state };

    default:
      return state;
  }
};
