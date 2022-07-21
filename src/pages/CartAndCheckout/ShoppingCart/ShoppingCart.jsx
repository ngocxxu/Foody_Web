import { CloseCircleOutlined } from '@ant-design/icons';
import { Col, InputNumber, Row } from 'antd';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import emptyCartIcon from '../../../assets/svg/cart_remove.svg';
import { ButtonCustom11 } from '../../../components/Button/Button';
import { getAllProducts } from '../../../services/ProductsService';

import {
  deleteProductToCart,
  empltyAllProductsToCart, updateProductToCart
} from '../../../services/CartService';
import './ShoppingCart.scss';

export const ShoppingCart = () => {
  const { isShoppingCart, isPendingCart } = useSelector(
    (state) => state.othersReducer
  );
  const { dataProductList } = useSelector((state) => state.productReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  const { subtotal, line_items, total_unique_items } = cart ?? {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const flagRef = useRef(false);

  const handleChangeQuantity = useCallback(
    (quantity, idItem) => {
      if (quantity > 0) {
        flagRef.current = true;
        dispatch(updateProductToCart(quantity, idItem));
      }
    },
    [dispatch]
  );

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
  }, [isShoppingCart]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Row>
      <Col lg={16}>
        <div className="border">
          <Row className="p-4 border-b">
            <Col span={9}>Product</Col>
            <Col span={3}>Price</Col>
            <Col span={5}>Quantity</Col>
            <Col span={4}>Subtotal</Col>
            <Col span={3}>
              <div
                onClick={() => {
                  flagRef.current = true;
                  dispatch(empltyAllProductsToCart());
                }}
                className="text-red-500 font-medium cursor-pointer hover:underline"
              >
                Clear All
              </div>
            </Col>
          </Row>
          {total_unique_items > 0 ? (
            line_items?.map((item) => (
              <Row
                key={item.id}
                className={`border-b p-4 ${
                  (isPendingCart || isShoppingCart) &&
                  flagRef.current === true &&
                  'opacity-40'
                }`}
                align="middle"
              >
                <Col span={9}>
                  <Row align="middle">
                    <Col span={6}>
                      <img
                        className="w-10 lg:w-16"
                        alt={item.image.filename}
                        src={item.image.url}
                      />
                    </Col>
                    <Col span={18}>
                      <div
                        onClick={() => handleNavigateProduct(item.product_id)}
                        className="text-xs lg:text-base break-all cursor-pointer ml-2 hover:text-blue-500"
                      >
                        {item.product_name}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span={3}>{item.price?.formatted_with_symbol}</Col>
                <Col span={5}>
                  <InputNumber
                    size="large"
                    min={1}
                    max={50}
                    defaultValue={item.quantity}
                    onChange={(value) => handleChangeQuantity(value, item.id)}
                    style={{ width: 65 }}
                    title="Quantity"
                  />
                </Col>
                <Col span={4}>{item.line_total?.formatted_with_symbol}</Col>
                <Col span={3}>
                  <div
                    className="mb-2 cursor-pointer"
                    onClick={() => {
                      flagRef.current = true;
                      dispatch(deleteProductToCart(item.id));
                    }}
                  >
                    <CloseCircleOutlined />
                  </div>
                </Col>
              </Row>
            ))
          ) : (
            <Row className="border-b">
              <div className="text-center mt-4">
                <img
                  className="mx-auto"
                  src={emptyCartIcon}
                  alt="empltyCartIcon"
                />
                <p className="text-lg mt-4 lg:mx-4">
                  Please add products in the cart
                </p>
              </div>
            </Row>
          )}
          <div className="m-4 lg:text-left text-center">
            <NavLink
              className="hover:border-[#272727] border hover:text-[#272727] text-xs font-bold rounded-full hover:bg-transparent bg-black px-7 py-3 text-white ease-out duration-300"
              to="/shop"
            >
              Continue Shopping
            </NavLink>
          </div>
        </div>
      </Col>
      <Col
        className="mt-4 lg:mt-0"
        lg={{
          span: 6,
          offset: 2,
        }}
      >
        <div className="mb-8 lg:mb-12 border bg-[#f6f6f6]">
          <Row className="p-4 bg-[#e9e9e9]">
            <Col span={24}>Cart totals</Col>
          </Row>
          <Row className="p-4">
            <Col span={12}>Subtotal</Col>
            <Col span={12}>{subtotal?.formatted_with_symbol}</Col>
          </Row>
          <Row className="p-4" align="middle">
            <Col span={12}>Shipping</Col>
            <Col span={12}>
              Shipping options will be updated during checkout.
            </Col>
          </Row>
          <Row className="p-4" align="middle">
            <Col span={12}>Total</Col>
            <Col className="text-2xl" span={12}>
              {subtotal?.formatted_with_symbol}
            </Col>
          </Row>
          <Row className="flex items-center justify-center pb-4">
            <ButtonCustom11
              onClick={() => navigate(`/cart-checkout/${id * 1 + 1}`)}
              className="lg:text-md text-xs"
              textButton="PROCEED TO CHECKOUT"
            />
          </Row>
        </div>
      </Col>
    </Row>
  );
};
