import { AUTH_USER_GOOGLE, TOGGLE_CREATE_ACCOUNT } from "../consts/const";

const initialState = {
  createAccount: false,
  authUser: {}
};

export const userReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case TOGGLE_CREATE_ACCOUNT:
      state.createAccount = action.createAcount;
      return { ...state };

    case AUTH_USER_GOOGLE:
      state.authUser = action.payload;
      return { ...state };

    default:
      return state;
  }
};
