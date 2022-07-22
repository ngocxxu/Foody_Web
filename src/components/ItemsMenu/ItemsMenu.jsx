import { Avatar, Badge, Button, Dropdown, Menu, Popover, Progress } from 'antd';
import clsx from 'clsx';
import { memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import emptyCartIcon from '../../assets/svg/cart_remove.svg';
import heartIcon from '../../assets/svg/heart-svgrepo-com.svg';
import removeIcon from '../../assets/svg/remove_items.svg';
import searchIcon from '../../assets/svg/searchhh.svg';
import cartIcon from '../../assets/svg/shopping-basket-svgrepo-com.svg';
import { useAuth } from '../../firebase';
import {
  EMPTY_WISH_LIST,
  SET_DRAWER_TABLE,
  SET_WHISHLIST_MODAL,
} from '../../redux/consts/const';
import {
  deleteProductToCart,
  empltyAllProductsToCart,
  getCart,
} from '../../services/CartService';
import { handleSignOut } from '../../services/UserService';
import { ItemDrawer } from '../ItemDrawer/ItemDrawer';
import { WishlistModal } from '../WishlistModal/WishlistModal';
import './ItemsMenu.scss';

const ItemsMenu = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const { wishListCart } = useSelector((state) => state.wishListReducer) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useAuth();

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <div onClick={() => navigate('/home')}>My Account</div>,
        },
        {
          key: '2',
          label: (
            <div onClick={() => navigate('/cart-checkout/1')}>
              Purchase Order
            </div>
          ),
        },
        {
          key: '3',
          label: (
            <div
              onClick={() => {
                Promise.all([
                  dispatch({ type: EMPTY_WISH_LIST }),
                  dispatch(empltyAllProductsToCart()),
                  dispatch(handleSignOut(() => navigate('/home'))),
                ]);
              }}
            >
              Sign Out
            </div>
          ),
        },
      ]}
    />
  );

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className='container-item-menu flex space-x-3'>
      {currentUser ? (
        <Dropdown
          className='my-auto font-medium'
          overlay={menu}
          placement='bottomRight'
          arrow
        >
          <Button
            icon={
              <Avatar
                className='mr-2'
                size='small'
                src={`${
                  currentUser?.photoURL
                    ? currentUser?.photoURL
                    : 'https://i.pravatar.cc/50'
                }`}
              />
            }
          >
            {currentUser?.reloadUserInfo?.displayName
              ? currentUser.reloadUserInfo.displayName
              : currentUser?.email.split('@')[0]}
          </Button>
        </Dropdown>
      ) : (
        <p
          onClick={() => navigate('/login')}
          className='font-bold my-auto whitespace-nowrap cursor-pointer'
        >
          Sign In | Sign Up
        </p>
      )}
      <ItemDrawer />
      <img
        onClick={() => {
          dispatch({
            type: SET_DRAWER_TABLE,
            boolDrawer: true,
          });
        }}
        className='cursor-pointer hover:-translate-y-1 ease-out duration-200 ml-0'
        src={searchIcon}
        alt='searchIcon'
      />
      {/* <ItemModal />
      <img
        onClick={() => navigate('/login')}
        className='cursor-pointer hover:-translate-y-1 ease-out duration-200'
        src={userIcon}
        alt='userIcon'
      /> */}
      <div className='background_badge_heart hover:-translate-y-1 ease-out duration-200'>
        <WishlistModal />
        <Badge
          className={clsx({
            'mr-4': wishListCart?.length >= 10,
          })}
          size='small'
          count={wishListCart?.length}
        >
          <Avatar
            shape='square'
            size='large'
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
      <div className='background_badge_cart drop-shadow-lg'>
        <ItemCart cart={cart} />
      </div>
    </div>
  );
};

const ItemCart = memo(({ cart }) => {
  const { isPendingCart } = useSelector((state) => state.othersReducer);
  const { dataProductList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subtotal, total_items, line_items } = cart ?? {};
  const flagRef = useRef(false);

  const handleNavigateProduct = useCallback(
    (idProductCart) => {
      const product = dataProductList.find(
        (product) => product.id === idProductCart
      );
      return navigate(
        `/shop/${
          product?.categories?.find((c) => c.name !== 'Hot')?.slug
        }/${idProductCart}`,
        { state: { productURL: product } }
      );
    },
    [dataProductList, navigate]
  );

  useEffect(() => {
    flagRef.current = false;
  }, [isPendingCart]);

  const contentCart = (
    <>
      <div>
        {total_items > 0 && cart !== null ? (
          <>
            {line_items?.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-between my-4 relative ${
                  isPendingCart && flagRef.current === true && 'opacity-40'
                }`}
              >
                <div className='flex items-center justify-center'>
                  <img
                    width='78px'
                    height='78px'
                    src={item.image.url}
                    alt={item.image.filename}
                  />
                  <div className='ml-4'>
                    <h3
                      onClick={() => handleNavigateProduct(item.product_id)}
                      className='mb-0 font-bold hover:text-blue-500 cursor-pointer'
                    >
                      {item.product_name}
                    </h3>
                    <p className='my-0 text-gray-500 font-semibold'>
                      Qty: {item.quantity}
                    </p>
                    <h2 className='text-lg text-red-500 font-bold'>
                      {item?.price?.formatted_with_symbol}
                    </h2>
                  </div>
                </div>
                <img
                  onClick={() => {
                    flagRef.current = true;
                    dispatch(deleteProductToCart(item.id));
                  }}
                  className='cursor-pointer'
                  src={removeIcon}
                  alt='removeIcon'
                />
              </div>
            ))}
            <div className='flex items-center justify-between border-y border-black py-3'>
              <div className='text-lg font-bold'>Total:</div>
              <div className='text-2xl font-bold'>
                {subtotal?.formatted_with_symbol}
              </div>
            </div>
            <div className='my-6'>
              {Math.floor(500 - subtotal?.formatted) <= 500 &&
              Math.floor(500 - subtotal?.formatted) >= 0 ? (
                <p>
                  Buy
                  <span className='px-1 text-md font-bold underline underline-offset-4'>
                    {Math.floor(500 - subtotal?.formatted)}$
                  </span>
                  more to enjoy
                  <span className='px-1 text-md font-bold underline underline-offset-4'>
                    FREE Shipping
                  </span>
                </p>
              ) : (
                <p>You've got free shipping!</p>
              )}
              <div>
                <Progress
                  percent={Math.floor((subtotal?.formatted * 100) / 500)}
                  showInfo={false}
                  strokeColor={{
                    '0%': '#0099f7',
                    '100%': '#f11712',
                  }}
                />
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg_slider_button bg_slider2_button ease-out duration-300 bg-black text-white hover:text-white'
                type='button'
                onClick={() => navigate('/cart-checkout/1')}
              >
                VIEW CART
              </button>
              <button
                className='bg_slider_button bg_slider3_button ease-out duration-300 bg-gray-500 text-white hover:text-white'
                type='button'
                onClick={() => navigate('/cart-checkout/2')}
              >
                CHECK OUT
              </button>
            </div>
          </>
        ) : (
          <div className='text-center'>
            <img className='mx-auto' src={emptyCartIcon} alt='empltyCartIcon' />
            <p className='text-lg mt-4 lg:mx-4'>No products in the cart</p>
            <NavLink to='/shop'>GO TO SHOP &rarr;</NavLink>
          </div>
        )}
      </div>
    </>
  );
  return (
    <>
      <Popover content={contentCart} placement='bottomRight'>
        <Badge size='small' count={total_items}>
          <Avatar shape='square' size='large' src={cartIcon} />
        </Badge>
      </Popover>
    </>
  );
});

export { ItemCart, ItemsMenu };
