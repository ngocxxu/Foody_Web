import React from "react";
import { Drawer, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { SET_DRAWER_TABLE } from "../../redux/consts/const";
import searchIcon from "../../assets/svg/searchhh.svg";

export const ItemDrawer = () => {
  const { drawerTable } = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({
      type: SET_DRAWER_TABLE,
      boolDrawer: false,
    });
  };

  return (
    <>
      <Drawer
        placement={"right"}
        closable={false}
        onClose={onClose}
        visible={drawerTable}
        key={"right"}
      >
      <Input size="large" placeholder="Search..." prefix={<img src={searchIcon} alt="searchIcon"/>}/>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
