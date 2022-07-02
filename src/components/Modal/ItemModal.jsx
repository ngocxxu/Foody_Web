import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_ITEM_MODAL } from "../../redux/consts/const";
import "./ItemModal.scss";
import { LoginUser } from "../../template/UserTemplate/LoginUser/LoginUser";
import { RegisterUser } from "../../template/UserTemplate/RegisterUser/RegisterUser";

export const ItemModal = () => {
  const { modalTable } = useSelector((state) => state.menuReducer);
  const { createAccount } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch({
      type: SET_ITEM_MODAL,
      modalTable: false,
    });
  };

  return (
    <>
      <Modal title="" visible={modalTable} onCancel={handleCancel}>
        {createAccount ? <RegisterUser /> : <LoginUser />}
      </Modal>
    </>
  );
};
