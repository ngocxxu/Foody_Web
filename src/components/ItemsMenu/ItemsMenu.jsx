import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Avatar, Badge, Popover, Progress } from 'antd';
import './ItemsMenu.scss';
import searchIcon from '../../assets/svg/searchhh.svg';
import userIcon from '../../assets/svg/user-svgrepo-com.svg';
import heartIcon from '../../assets/svg/heart-svgrepo-com.svg';
import cartIcon from '../../assets/svg/shopping-basket-svgrepo-com.svg';
import emptyCartIcon from '../../assets/svg/cart_remove.svg';
import removeIcon from '../../assets/svg/remove_items.svg';
import product1 from '../../assets/images/product/Products-1-600x600.jpg';
import {
  SET_DRAWER_TABLE,
  SET_ITEM_MODAL,
  SET_WHISHLIST_MODAL,
} from '../../redux/consts/const';
import { ItemDrawer } from '../ItemDrawer/ItemDrawer';
import { ItemModal } from '../Modal/ItemModal';
import { WishlistModal } from '../WishlistModal/WishlistModal';
import { createCart, getCart } from '../../services/CartService';

const ItemsMenu = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log({ cart });
  useEffect(() => {
    // dispatch(createCart());
    dispatch(getCart());
  }, [dispatch]);

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
        <ItemCart cart={cart} />
      </div>
    </div>
  );
};

const ItemCart = memo(({ cart }) => {
  const { subtotal, total_items, line_items, id } = cart ?? {};
  const contentCart = (
    <>
      <div className="text-center lg:hidden block">
        {cart?.total_items > 0 ? (
          ''
        ) : (
          <>
            <img className="mx-auto" src={emptyCartIcon} alt="empltyCartIcon" />
            <p className="text-lg mt-4 lg:mx-4">No products in the cart</p>
            <NavLink to="/shop">GO TO SHOP &rarr;</NavLink>
          </>
        )}
      </div>
      <div className="text-center lg:block hidden">
        {total_items > 0 && cart !== null ? (
          <>
            {line_items.map((item) => (
              <>
                <div className="flex items-center justify-between my-4">
                  <div className="flex items-center justify-center">
                    <img
                      width="78px"
                      height="78px"
                      src={item.image.url}
                      alt={item.image.filename}
                    />
                    <div className="ml-4">
                      <h3 className="mb-0 font-bold">{item.product_name}</h3>
                      <p className="my-0 text-gray-500 font-semibold">
                        Qty: {item.quantity}
                      </p>
                      <h2 className="text-lg text-red-500 font-bold">
                        {item.price.formatted_with_symbol}
                      </h2>
                    </div>
                  </div>
                  <img
                    className="cursor-pointer"
                    src={removeIcon}
                    alt="removeIcon"
                  />
                </div>
              </>
            ))}
            <div className="flex items-center justify-between border-y border-black py-3">
              <div className="text-lg font-bold">Total:</div>
              <div className="text-2xl font-bold">
                {subtotal.formatted_with_symbol}
              </div>
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
                <NavLink
                  className="text-white hover:text-white"
                  to="/cart-checkout/1"
                >
                  VIEW CART
                </NavLink>
              </button>
              <button
                className="bg_slider_button bg_slider3_button ease-out duration-300"
                type="button"
              >
                <NavLink
                  className="text-white hover:text-white"
                  to="/cart-checkout/2"
                >
                  CHECK OUT
                </NavLink>
              </button>
            </div>
          </>
        ) : (
          <>
            <img className="mx-auto" src={emptyCartIcon} alt="empltyCartIcon" />
            <p className="text-lg mt-4 lg:mx-4">No products in the cart</p>
            <NavLink to="/shop">GO TO SHOP &rarr;</NavLink>
          </>
        )}
      </div>
    </>
  );
  return (
    <>
      <Popover content={contentCart} placement="bottomRight">
        <Badge size="small" count={5}>
          <Avatar shape="square" size="large" src={cartIcon} />
        </Badge>
      </Popover>
    </>
  );
});

export { ItemCart, ItemsMenu };
