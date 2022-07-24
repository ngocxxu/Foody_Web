import { Button, Modal } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import heartIcon from '../../assets/svg/heart-2.svg';
import xIcon from '../../assets/svg/x-symbol.svg';
import { useAuth } from '../../firebase';
import { SET_WHISHLIST_MODAL } from '../../redux/consts/const';
import { addProductToCart } from '../../services/CartService';
import {
  handleDeleteWish,
  handleGetWishList,
} from '../../services/WishListService';
import { LazyButtonLoading } from '../LazyLoading/LazyLoading';
import './WishlistModal.scss';

export const WishlistModal = () => {
  const { isButtonLazyLoading } = useSelector((state) => state.othersReducer);
  const { modalWishlist } = useSelector((state) => state.menuReducer);
  const { wishListCart } = useSelector((state) => state.wishListReducer) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flagRef = useRef(false);
  const currentUser = useAuth();

  const handleCancel = () => {
    dispatch({
      type: SET_WHISHLIST_MODAL,
      modalWishlist: false,
    });
  };

  useEffect(() => {
    dispatch(handleGetWishList());
  }, [dispatch]);

  // Handle button appear only one LazyLoading
  useEffect(() => {
    flagRef.current = false;
  }, [isButtonLazyLoading]);

  return (
    <>
      <Modal
        className='container-wishlist'
        title=''
        visible={modalWishlist}
        onCancel={handleCancel}
      >
        <div className='flex items-center mb-4 border-b pb-5'>
          <img src={heartIcon} alt='heartIcon' className='fill-red-800 mr-2' />
          <p className='text-xl font-semibold my-auto '>
            Wishlist
            {wishListCart?.length === 0 ? '' : ` (${wishListCart?.length})`}
          </p>
        </div>
        <div
          className={`border-b ${
            isButtonLazyLoading && flagRef.current === true && 'opacity-40'
          }`}
        >
          {wishListCart?.length > 0 ? (
            wishListCart?.map((product, _, array) => (
              <div
                key={product.product_item.id}
                className='flex my-3 justify-between items-center'
              >
                <div className='flex'>
                  <img
                    onClick={() => dispatch(handleDeleteWish(product.uuid))}
                    className='cursor-pointer'
                    src={xIcon}
                    alt='xIcon'
                  />
                  <div
                    style={{ width: '80px', height: '80px' }}
                    className='my-auto mx-4'
                  >
                    <img
                      width='100%'
                      className='img_wishlist'
                      src={product.product_item.image.url}
                      alt={product.product_item.image.filename}
                    />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <NavLink
                      onClick={handleCancel}
                      state={{ productURL: product.product_item }}
                      to={`/shop/${
                        product.product_item.categories?.find(
                          (c) => c.name !== 'Hot'
                        )?.slug
                      }/${product.product_item.id}`}
                      className='font-bold mb-0 cursor-pointer hover:text-blue-500'
                    >
                      {product.product_item.name}
                    </NavLink>
                    <h2 className='text-lg text-red-500 font-semibold mb-0'>
                      {product.product_item.price?.formatted_with_symbol}
                    </h2>
                    {/* <div className='text-gray-400 text-xs'>
                        April 24, 2022
                      </div> */}
                  </div>
                </div>
                <div>
                  <p className='text-right text-gray-400 text-xs'>In stock</p>
                  <Button
                    onClick={() => {
                      if (currentUser) {
                        flagRef.current = true;
                        dispatch(
                          addProductToCart({
                            id: product.product_item.id,
                            quantity: 1,
                          })
                        );
                      } else {
                        navigate('/login');
                      }
                    }}
                    type='dashed'
                    shape='round'
                    size='small'
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center mb-4'>
              There are no products on the wishlist!
            </p>
          )}
        </div>
        <div className='mt-6 flex justify-between'>
          {/* <button className="text-white font-semibold bg-black  py-2 px-4 rounded-full hover:bg-red-600 ease-out duration-300">
            OPEN WISHLIST PAGE
          </button> */}
          <div></div>
          <button
            onClick={handleCancel}
            className='border-black border-2 font-semibold py-2 px-4 rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 ease-out duration-300'
          >
            CONTINUE SHOPPING &rarr;
          </button>
        </div>
      </Modal>
    </>
  );
};
