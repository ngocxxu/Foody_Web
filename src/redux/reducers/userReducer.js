import { TOGGLE_CREATE_ACCOUNT } from "../consts/const";

const initialState = {
  createAccount: false,
};

export const userReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case TOGGLE_CREATE_ACCOUNT:
      state.createAccount = action.createAcount;
      return { ...state };

    default:
      return state;
  }
};
