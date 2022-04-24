import { SET_DRAWER_TABLE, SET_ITEM_MODAL, SET_WHISHLIST_MODAL } from "../consts/const";

const initialState = {
  drawerTable: false,
  modalTable: false,
  modalWishlist: false,
};

export const menuReducer= (state = initialState, action) => {
  switch (action.type) {

  case SET_DRAWER_TABLE:
    state.drawerTable = action.boolDrawer;
    return { ...state };

  case SET_ITEM_MODAL:
    state.modalTable = action.modalTable;
    return { ...state };

  case SET_WHISHLIST_MODAL:
    state.modalWishlist = action.modalWishlist;
    return { ...state };

  default:
    return state
  }
};

