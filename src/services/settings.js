import axios from "axios";
import Commerce from '@chec/commerce.js';

export const TOKEN_COMMERCEJS = "";
export const DOMAIN = "https://api.chec.io/v1";
export const USER_LOGIN = "userLogin";
export const ACCESSTOKEN =
  "pk_test_42845e6b1b61237211932de88dbd4d0e3885cb36b9572";
export const BASE_URL_IMAGE = "../../../assets/images/product";
const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;

//setup axios interceptor
export const http = axios.create({
  baseURL: DOMAIN, //Domain khi request api sẽ được ghép vào với link
  // timeout: 30000, //Thời gian tối đa chờ response trả về
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers, //Lấy lại tất cả các giá trị header qua thuộc tính headers
      Accept: "application/json",
      "Content-Type": "application/json",
      // "Authorization": "Bearer " + localStorage.getItem(ACCESSTOKEN),
      "X-Authorization": ACCESSTOKEN,
      TokenCommerceJS: TOKEN_COMMERCEJS,
      "X-Chec-Agent": "commerce.js/v2",
      "Chec-Version": "2021-10-06",
    };
    return config;
  },
  (errors) => {
    return Promise.reject({ errors });
  }
);

export default new Commerce(
  checAPIKey,
  false,
  http,
);
