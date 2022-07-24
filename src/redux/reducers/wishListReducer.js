import {
  EMPTY_WISH_LIST,
  GET_WISH_LIST,
  GET_WISH_LIST_FS,
} from '../consts/const';

const initialState = {
  wishListCart: [],
  wishListCartFS: [],
  objWishListCart: {},
};

export const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_WISH_LIST:
    //   state.wishListCart = [...state.wishListCart, action.payload];
    //   return { ...state };

    // case DELETE_WISH_LIST:
    //   state.wishListCart = [...state.wishListCart].filter(
    //     (item) => item.id !== action.productId
    //   );
    //   return { ...state };

    case EMPTY_WISH_LIST:
      state.wishListCart = [];
      return { ...state };

    case GET_WISH_LIST:
      state.wishListCart = [];
      if (action.payload) {
        Object.values(action.payload).map(
          (item) => (state.wishListCart = [...state.wishListCart, item])
        );
      }
      return { ...state };

    case GET_WISH_LIST_FS:
      // let cloneWishListCart = [...state.wishListCart]
      action.payload.foreach((wishDoc) => {
        [...state.wishListCartFS].push({ ...wishDoc.data(), id: wishDoc.id });
      });
      return { ...state };

    default:
      return state;
  }
};
