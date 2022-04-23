import { SET_DRAWER_TABLE, SET_ITEM_MODAL } from "../consts/const";

const initialState = {
  drawerTable: false,
  modalTable: false,
};

export const menuReducer= (state = initialState, action) => {
  switch (action.type) {

  case SET_DRAWER_TABLE:
    state.drawerTable = action.boolDrawer;
    return { ...state };

  case SET_ITEM_MODAL:
    state.modalTable = action.modalTable;
    return { ...state };

  default:
    return state
  }
};

