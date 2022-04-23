import React from "react";
import { Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_ITEM_MODAL } from "../../redux/consts/const";
import "./ItemModal.scss";
import { LoginUser } from "../../template/UserTemplate/LoginUser/LoginUser";

export const ItemModal = () => {
  const { modalTable } = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch({
      type: SET_ITEM_MODAL,
      modalTable: false,
    });
  };

  return (
    <>
      <Modal title="Basic Modal" visible={modalTable} onCancel={handleCancel}>
        <LoginUser />
      </Modal>
    </>
  );
};
