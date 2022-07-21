import { Button, Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import heartIcon from '../../assets/svg/heart-2.svg';
import xIcon from '../../assets/svg/x-symbol.svg';
import {
  DELETE_WISH_LIST,
  SET_WHISHLIST_MODAL
} from '../../redux/consts/const';
import './WishlistModal.scss';

export const WishlistModal = () => {
  const { modalWishlist } = useSelector((state) => state.menuReducer);
  const { wishListCart } = useSelector((state) => state.wishListReducer) || [];
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch({
      type: SET_WHISHLIST_MODAL,
      modalWishlist: false,
    });
  };

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
        <div className='border-b'>
          {wishListCart?.length === 0 ? (
            <p className='text-center mb-4'>
              There are no products on the wishlist!
            </p>
          ) : (
            wishListCart?.map((product) => (
              <div
                key={product.id}
                className='flex my-3 justify-between items-center'
              >
                <div className='flex'>
                  <img
                    onClick={() =>
                      dispatch({
                        type: DELETE_WISH_LIST,
                        productId: product.id,
                      })
                    }
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
                      src={product.image.url}
                      alt={product.image.filename}
                    />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <NavLink
                      onClick={handleCancel}
                      state={{ productURL: product }}
                      to={`/shop/${
                        product.categories?.find((c) => c.name !== 'Hot')?.slug
                      }/${product.id}`}
                      className='font-bold mb-0 cursor-pointer hover:text-blue-500'
                    >
                      {product.name}
                    </NavLink>
                    <h2 className='text-lg text-red-500 font-semibold mb-0'>
                      {product.price?.formatted_with_symbol}
                    </h2>
                    {/* <div className='text-gray-400 text-xs'>
                        April 24, 2022
                      </div> */}
                  </div>
                </div>
                <div>
                  <p className='text-right text-gray-400 text-xs'>In stock</p>
                  <Button type='dashed' shape='round' size='small'>
                    Add to cart
                  </Button>
                </div>
              </div>
            ))
          )}
          {/* <div className='flex my-3 justify-between items-center'>
            <div className='flex'>
              <img className='cursor-pointer' src={xIcon} alt='xIcon' />
              <div
                style={{ width: '80px', height: '80px' }}
                className='my-auto mx-4'
              >
                <img
                  width='100%'
                  className='img_wishlist'
                  src={product2}
                  alt='product2'
                />
              </div>
              <div className='flex flex-col justify-center'>
                <h4 className='font-bold mb-0 cursor-pointer'>Cheesecake</h4>
                <h2 className='text-lg text-red-500 font-semibold mb-0'>
                  $99.00
                </h2>
                <div className='text-gray-400 text-xs'>April 24, 2022</div>
              </div>
            </div>
            <div>
              <p className='text-right text-gray-400 text-xs'>In stock</p>
              <Button type='dashed' shape='round' size='small'>
                Add to cart
              </Button>
            </div>
          </div> */}
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
