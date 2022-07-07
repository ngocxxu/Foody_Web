import { CloseCircleOutlined } from '@ant-design/icons';
import { Col, InputNumber, Row } from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ButtonCustom11 } from '../../../components/Button/Button';
import { updateProductToCart } from '../../../services/CartService';
import './ShoppingCart.scss';

export const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const { subtotal, line_items } = cart ?? {};
  const dispatch = useDispatch();

  const handleChangeQuantity = useCallback((quantity, idItem) => {
    dispatch(updateProductToCart(quantity, idItem))
  }, [dispatch]);

  console.log({line_items})

  return (
    <Row>
      <Col lg={16}>
        <div className="border">
          <Row className="p-4 border-b">
            <Col span={9}>Product</Col>
            <Col span={3}>Price</Col>
            <Col span={6}>Quantity</Col>
            <Col span={4}>Subtotal</Col>
            <Col span={2}></Col>
          </Row>
          {line_items?.map((item) => (
            <Row key={item.id} className="border-b p-4" align="middle">
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
                    <NavLink
                      className="text-xs lg:text-base break-all"
                      to="/shop/burgers/12"
                    >
                      {item.product_name}
                    </NavLink>
                  </Col>
                </Row>
              </Col>
              <Col span={3}>{item.price?.formatted_with_symbol}</Col>
              <Col span={6}>
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
              <Col span={2}>
                <div className="mb-2 cursor-pointer">
                  <CloseCircleOutlined />
                </div>
              </Col>
            </Row>
          ))}
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
          <div className="flex items-center justify-center pb-4">
            <ButtonCustom11
              className="text-lg"
              textButton="PROCEED TO CHECKOUT"
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};
