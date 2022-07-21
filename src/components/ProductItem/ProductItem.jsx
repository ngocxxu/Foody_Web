import clsx from 'clsx';
import { memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { ReactComponent as HeartSVG } from '../../assets/svg/heart-2.svg';
import { useAuth } from '../../firebase';
import { addProductToCart } from '../../services/CartService';
import { LazyButtonLoading } from '../LazyLoading/LazyLoading';
import './ProductItem.scss';

export const ProductItem = memo(({ product }) => {
  // console.log({product});
  const currentUser = useAuth();
  const flagRef = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    dataProductSaleList: { data },
  } = useSelector((state) => state.productReducer);
  const { isButtonLazyLoading } = useSelector((state) => state.othersReducer);
  const { id, name, price, assets, categories } = product ?? {};
  const { product_ids, value } = (data ?? [])[0] ?? {};

  const handleFindIdSaleProduct = useCallback(
    () => product_ids?.find((idItem) => idItem === id),
    [product_ids, id]
  );

  // Handle button appear only one LazyLoading
  useEffect(() => {
    flagRef.current = false;
  }, [isButtonLazyLoading]);

  return (
    <div
      className={`product-item bg-white rounded-3xl p-4 m-4 ease-out duration-700`}
    >
      <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center'>
          {categories.find((i) => i.name === 'Hot')?.name && (
            <div className='bg-[#00a950] drop-shadow-lg text-xs rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-white font-semibold'>
              Hot
            </div>
          )}
          {handleFindIdSaleProduct() ? (
            <div className='bg-[#f1252b] drop-shadow-lg text-xs ml-2 rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-white font-semibold'>
              {value}%
            </div>
          ) : (
            <div className='bg-[#fff] w-8 h-8 lg:w-10 lg:h-10'></div>
          )}
        </div>
        <div className='cursor-pointer group'>
          <HeartSVG
            className='group-hover:fill-[#ffb219] ease-out duration-300'
            fill='#e9e9e9'
          />
        </div>
      </div>
      <NavLink
        state={{ productURL: product }}
        to={`/shop/${categories.find((c) => c.name !== 'Hot')?.slug}/${id}`}
        className='containerImage relative'
      >
        <img src={assets[0].url} alt='product1' />
        <div className='overlay'>
          <img src={assets[1].url} alt='product2' />
        </div>
      </NavLink>
      <div className='text-center'>
        <div>
          <div className='lg:text-lg text-sm font-bold w-full h-[56px] table text-center'>
            <NavLink
              state={{ productURL: product }}
              to={`/shop/${
                categories.find((c) => c.name !== 'Hot')?.slug
              }/${id}`}
              className='text-black hover:text-[#f1252b] uppercase table-cell align-middle'
            >
              {name}
            </NavLink>
          </div>
          <div className='text-lg font-bold text-[#f1252b] flex justify-center items-center'>
            <div
              className={clsx({
                'line-through': handleFindIdSaleProduct(),
                'text-sm': handleFindIdSaleProduct(),
                'text-gray-400': handleFindIdSaleProduct(),
                'mr-2': handleFindIdSaleProduct(),
              })}
            >
              {handleFindIdSaleProduct()
                ? `$${Math.floor(price.raw + (price.raw * value) / 100)}.00`
                : price?.formatted_with_symbol}
            </div>
            {handleFindIdSaleProduct() && (
              <div>{price?.formatted_with_symbol}</div>
            )}
          </div>
        </div>
        <div className='my-3 lg:my-6'>
          {/* <ButtonCustom8
            onClick={() => {
              dispatch(
                addProductToCart({
                  id: id,
                  quantity: 1,
                })
              );
            }}
            textButton="ADD TO CART"
          /> */}
          <button
            onClick={() => {
              if (currentUser) {
                flagRef.current = true;
                dispatch(
                  addProductToCart({
                    id: id,
                    quantity: 1,
                  })
                );
              } else {
                navigate('/login');
              }
            }}
            className={`border-[#272727] border text-[#272727] text-[10px] lg:text-xs font-bold rounded-full px-2 lg:px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300`}
          >
            {isButtonLazyLoading & (flagRef.current === true) ? (
              <LazyButtonLoading />
            ) : (
              'ADD TO CART'
            )}
          </button>
        </div>
      </div>
    </div>
  );
});

// {`${value} ? $${price.raw + Math.floor((price.raw * value) / 100)}.00 : ${price.formatted_with_symbol}`}
