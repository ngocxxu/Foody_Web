import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Avatar, Badge, Popover, Progress } from "antd";
import "./ItemsMenu.scss";
import searchIcon from "../../assets/svg/searchhh.svg";
import userIcon from "../../assets/svg/user-svgrepo-com.svg";
import heartIcon from "../../assets/svg/heart-svgrepo-com.svg";
import cartIcon from "../../assets/svg/shopping-basket-svgrepo-com.svg";
import emptyCartIcon from "../../assets/svg/cart_remove.svg";
import removeIcon from "../../assets/svg/remove_items.svg";
import product1 from "../../assets/images/product/Products-1-600x600.jpg";
import {
  SET_DRAWER_TABLE,
  SET_ITEM_MODAL,
  SET_WHISHLIST_MODAL,
} from "../../redux/consts/const";
import { ItemDrawer } from "../ItemDrawer/ItemDrawer";
import { ItemModal } from "../Modal/ItemModal";
import { WishlistModal } from "../WishlistModal/WishlistModal";

const ItemCart = () => {
  const contentCart = (
    <>
      <div className="text-center lg:hidden block">
        <img className="mx-auto" src={emptyCartIcon} alt="empltyCartIcon" />
        <p className="text-lg mt-4 lg:mx-4">No products in the cart</p>
        <NavLink to="/shop">GO TO SHOP &rarr;</NavLink>
      </div>
      <div className="lg:block hidden ">
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center justify-center">
            <img width="78px" height="78px" src={product1} alt="product1" />
            <div className="ml-4">
              <h3 className="mb-0 font-bold">Burger King</h3>
              <p className="my-0 text-gray-500 font-semibold">Qty: 1</p>
              <h2 className="text-lg text-red-500 font-bold">$99.00</h2>
            </div>
          </div>
          <img className="cursor-pointer" src={removeIcon} alt="removeIcon" />
        </div>
        <div className="flex items-center justify-between border-y border-black py-3">
          <div className="text-lg font-bold">Total:</div>
          <div className="text-2xl font-bold">$99.00</div>
        </div>
        <div className="my-6">
          <p>
            Buy
            <span className="px-1 text-md font-bold underline underline-offset-4">
              $401
            </span>
            more to enjoy
            <span className="px-1 text-md font-bold underline underline-offset-4">
              FREE Shipping
            </span>
          </p>
          <div>
            <Progress percent={50} showInfo={false} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg_slider_button bg_slider2_button ease-out duration-300"
            type="button"
          >
            VIEW CART
          </button>
          <button
            className="bg_slider_button bg_slider3_button ease-out duration-300"
            type="button"
          >
            CHECK OUT
          </button>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Popover trigger="click" content={contentCart} placement="bottomRight">
        <Badge size="small" count={5}>
          <Avatar shape="square" size="large" src={cartIcon} />
        </Badge>
      </Popover>
    </>
  );
};

const ItemsMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-3">
      <ItemDrawer />
      <img
        onClick={() => {
          dispatch({
            type: SET_DRAWER_TABLE,
            boolDrawer: true,
          });
        }}
        className="cursor-pointer hover:-translate-y-1 ease-out duration-200"
        src={searchIcon}
        alt="searchIcon"
      />
      <ItemModal />
      <img
        onClick={() => {
          dispatch({
            type: SET_ITEM_MODAL,
            modalTable: true,
          });
        }}
        className="cursor-pointer hover:-translate-y-1 ease-out duration-200"
        src={userIcon}
        alt="userIcon"
      />
      <div className="background_badge_heart hover:-translate-y-1 ease-out duration-200">
        <WishlistModal />
        <Badge size="small" count={5}>
          <Avatar
            shape="square"
            size="large"
            src={heartIcon}
            onClick={() => {
              dispatch({
                type: SET_WHISHLIST_MODAL,
                modalWishlist: true,
              });
            }}
          />
        </Badge>
      </div>
      <div className="background_badge_cart drop-shadow-lg">
        <ItemCart />
      </div>
    </div>
  );
};

export { ItemCart, ItemsMenu };
