/* eslint-disable no-template-curly-in-string */
import { Col, Divider, Form, Input, Row, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCustom11 } from '../../../components/Button/Button';
import {
  getListCountries,
  getListSubCountry,
} from '../../../services/CheckoutService';
import './Checkout.scss';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export const Checkout = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const { listCountries, listSubCountry } = useSelector(
    (state) => state.checkoutReducer
  );
  const { subtotal, line_items } = cart ?? {};
  const dispatch = useDispatch();
  const [subValue, setsubValue] = useState('');

  const handleChangeListCountries = useCallback(
    (value) => {
      setsubValue(value);
      dispatch(getListSubCountry(value));
    },
    [dispatch]
  );

  const handleChangeListSubCountry = useCallback(
    (value) => {
      dispatch(getListSubCountry(value));
    },
    [dispatch]
  );

  const onFinish = (values) => {
    console.log(values);
  };

  useEffect(() => {
    dispatch(getListCountries());
  }, [dispatch]);

  return (
    <>
      <Form
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row>
          <Col span={14}>
            <h1 className="text-2xl">Billing details</h1>
            <Form.Item
              name={['user', 'firstname']}
              label="First name"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={['user', 'lastname']}
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={['user', 'country-region']}
              label="Country / Region"
              rules={[{ required: true }]}
            >
              <Select
                defaultValue="Select your option"
                style={{
                  width: '100%',
                }}
                onChange={handleChangeListCountries}
              >
                {listCountries?.map((country, index) => (
                  <Option key={index} value={country.key}>
                    {country.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={['user', 'town-city']}
              label="Town / City"
              rules={[{ required: true }]}
            >
              <Select
                defaultValue="Select your option"
                style={{
                  width: '100%',
                }}
                onChange={handleChangeListSubCountry(subValue)}
              >
                {listSubCountry?.map((subCountry, index) => (
                  <Option key={index} value={subCountry.key}>
                    {subCountry.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={['user', 'street_address']}
              label="Street address"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={['user', 'postcode']}
              label="Postcode"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={['user', 'phone']}
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item name={['user', 'notes']} label="Order notes (optional)">
              <Input.TextArea
                className="w-full"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </Form.Item>
          </Col>
          <Col
            className="border border-black p-8 rounded-lg h-fit"
            span={8}
            offset={2}
          >
            <h1 className="text-2xl">Product</h1>
            {line_items?.map((item) => (
              <Row key={item.id} className="p-4 pb-0">
                <Col span={16}>
                  <Row>
                    <Col span={8}>
                      <img
                        className="w-10 lg:w-16"
                        alt={item.image.filename}
                        src={item.image.url}
                      />
                    </Col>
                    <Col span={16}>
                      {item.product_name}
                      <div className="text-md font-bold" level={5}>
                        QTY: {item.quantity}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col className="text-right" span={8}>
                  {item.line_total?.formatted_with_symbol}
                </Col>
              </Row>
            ))}
            <Divider className="border" />
            <Row className="p-4">
              <Col span={16}>Subtotal</Col>
              <Col className="text-right" span={8}>
                {subtotal?.formatted_with_symbol}
              </Col>
            </Row>
            <Divider className="border" />
            <Row className="p-4">
              <Col span={16}>Shipping</Col>
              <Col className="text-right" span={8}>
                {subtotal?.formatted_with_symbol}
              </Col>
            </Row>
            <Divider className="border" />
            <Row className="p-4">
              <Col span={16}>Total</Col>
              <Col className="text-right" span={8}>
                {subtotal?.formatted_with_symbol}
              </Col>
            </Row>
            <Form.Item>
              <ButtonCustom11
                type="submit"
                className="text-lg w-full py-4 mt-10"
                textButton="PLACE ORDER"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
