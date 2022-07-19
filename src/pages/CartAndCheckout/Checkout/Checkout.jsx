/* eslint-disable no-template-curly-in-string */
import { Col, Divider, Form, Input, Row, Select } from 'antd';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonCustom11 } from '../../../components/Button/Button';
import { LazyButtonLoading } from '../../../components/LazyLoading/LazyLoading';
import { regexName } from '../../../components/Regex';
import {
  createCaptureOrder,
  getListCountries,
  getListSubCountry,
  getShippingMethods,
} from '../../../services/CheckoutService';
import { Payment } from '../Payment';
import './Checkout.scss';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
    string: '${label} is not a valid string!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
  whitespace: '${label} do not have whitespace!',
};

export const Checkout = memo(({ checkoutToken }) => {
  const { cart } = useSelector((state) => state.cartReducer);
  const { shippingMethods } = useSelector((state) => state.checkoutReducer);
  const { isButtonLazyLoading } = useSelector((state) => state.othersReducer);
  const { listCountries, listSubCountry } = useSelector(
    (state) => state.checkoutReducer
  );
  const { subtotal, line_items } = cart ?? {};
  const [subValue, setSubValue] = useState('');
  const flagRef = useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const nameVal = Form.useWatch(['shipping', 'name'], form);
  const emailVal = Form.useWatch(['customer', 'email'], form);
  const countryVal = Form.useWatch(['shipping', 'country'], form);
  const countyStateVal = Form.useWatch(['shipping', 'county_state'], form);
  const townCityVal = Form.useWatch(['shipping', 'town_city'], form);
  const streetVal = Form.useWatch(['shipping', 'street'], form);
  const shippingMethodVal = Form.useWatch(
    ['fulfillment', 'shipping_method'],
    form
  );
  const numberVal = Form.useWatch(['card', 'number'], form);
  const expiryYearVal = Form.useWatch(['card', 'expiry_year'], form);
  const expiryMonthVal = Form.useWatch(['card', 'expiry_month'], form);
  const cvcVal = Form.useWatch(['card', 'cvc'], form);
  const postalZipCodeVal = Form.useWatch(['card', 'postal_zip_code'], form);

  const handleChangeListCountries = useCallback(
    (value) => {
      setSubValue(value);
      dispatch(getListSubCountry(value));
    },
    [dispatch]
  );

  const handleChangeListSubCountry = useCallback(
    (value, subVal) => {
      dispatch(getListSubCountry(subVal));
      if (checkoutToken) {
        dispatch(
          getShippingMethods(checkoutToken?.id, {
            country: subVal,
            region: value,
          })
        );
      }
    },
    [dispatch, checkoutToken]
  );

  const onFinish = useCallback(
    (values) => {
      dispatch(
        createCaptureOrder(
          checkoutToken?.id,
          {
            line_items,
            payment: {
              gateway: 'test_gateway',
              card: values.card,
            },
            ...values,
          },
          () => navigate('/order-success')
        )
      );
    },
    [checkoutToken, dispatch, line_items, navigate]
  );

  const handleCountryVal = useCallback(() => {
    const findCountry = listCountries?.find((f) => f.key === countryVal);
    return <span>{findCountry?.value}</span>;
  }, [listCountries, countryVal]);

  const handleCountrySubVal = useCallback(() => {
    if (listCountries.length > 0) {
      const findCountry = listSubCountry?.find((f) => f.key === countyStateVal);
      return <span>{findCountry?.value}</span>;
    }
  }, [listSubCountry, listCountries, countyStateVal]);

  const handleShippingMethod = useCallback(() => {
    if (listCountries.length > 0 && listSubCountry.length > 0) {
      const findShipMed = shippingMethods?.find(
        (f) => f.id === shippingMethodVal
      );
      return (
        <span>{`${findShipMed?.description} (${findShipMed?.price?.formatted_with_symbol})`}</span>
      );
    }
  }, [shippingMethods, shippingMethodVal, listCountries, listSubCountry]);

  useEffect(() => {
    dispatch(getListCountries(checkoutToken?.id));
  }, [dispatch, checkoutToken]);

  // Handle button appear only one LazyLoading
  useEffect(() => {
    flagRef.current = false;
  }, [isButtonLazyLoading]);

  return (
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Row>
        <Col lg={14}>
          <h1 className="text-2xl">Billing Details</h1>
          <Form.Item
            name={['shipping', 'name']}
            label="Full name"
            rules={[
              {
                type: 'string',
                required: true,
              },
              {
                pattern: regexName,
                message: `Your name is not valid!`,
              },
            ]}
          >
            <Input className="w-full" placeholder="Your name" />
          </Form.Item>
          {/* <Form.Item
            name={['customer', 'lastname']}
            label="Last name"
            rules={[{ required: true }]}
          >
            <Input className="w-full" />
          </Form.Item> */}
          {/* <Form.Item
            name={['customer', 'phone']}
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input className="w-full" />
          </Form.Item> */}
          <Form.Item
            name={['customer', 'email']}
            label="Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input className="w-full" placeholder="Your email" />
          </Form.Item>
          <Form.Item
            name={['shipping', 'country']}
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
                <Select.Option key={index} value={country.key}>
                  {country.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name={['shipping', 'county_state']}
            label="Subdivisions of country"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Select your option"
              style={{
                width: '100%',
              }}
              onChange={(value) => handleChangeListSubCountry(value, subValue)}
            >
              {listSubCountry?.map((subCountry, index) => (
                <Select.Option key={index} value={subCountry.key}>
                  {subCountry.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name={['shipping', 'town_city']}
            label="Town / City"
            rules={[{ required: true }]}
          >
            <Input className="w-full" placeholder="Ho Chi Minh" />
          </Form.Item>
          <Form.Item
            name={['shipping', 'street']}
            label="Street address"
            rules={[{ required: true }]}
          >
            <Input className="w-full" placeholder="Your address" />
          </Form.Item>
          {/* <Form.Item
            name={['shipping', 'postal_zip_code']}
            label="Postcode"
            rules={[{ required: true }]}
          >
            <Input className="w-full" />
          </Form.Item> */}
          <Form.Item
            name={['fulfillment', 'shipping_method']}
            label="Shipping Methods"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Select your option"
              style={{
                width: '100%',
              }}
            >
              {shippingMethods?.map((shipMethod) => (
                <Select.Option key={shipMethod.id} value={shipMethod.id}>
                  {`${shipMethod.description} (${shipMethod?.price?.formatted_with_symbol})`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* <Form.Item name={['user', 'notes']} label="Order notes (optional)">
            <Input.TextArea
              className="w-full"
              placeholder="Notes about your order, e.g. special notes for delivery"
            />
          </Form.Item> */}
          <div className="border border-black shadow-md p-4 mb-6 lg:mb-0">
            <h1 className="text-2xl lg:mb-2">Billing Review</h1>
            <Row className="justify-start">
              <Col lg={12}>
                <h1 className="text-xl mt-2 lg:mt-0">Your information</h1>
                <p>
                  <b>Fullname: </b>
                  <span>{nameVal}</span>
                </p>
                <p>
                  <b>Email: </b>
                  <span>{emailVal}</span>
                </p>
                <p>
                  <b>Country / Region: </b>
                  {handleCountryVal()}
                </p>
                <p>
                  <b>Subdivisions of country: </b>
                  {handleCountrySubVal()}
                </p>
                <p>
                  <b>Town / City: </b>
                  <span>{townCityVal}</span>
                </p>
                <p>
                  <b>Street address: </b>
                  <span>{streetVal}</span>
                </p>
                <p>
                  <b>Shipping Methods: </b>
                  {handleShippingMethod()}
                </p>
              </Col>
              <Col lg={12}>
                <h1 className="text-xl mt-2 lg:mt-0">Payment</h1>
                <p>
                  <b>Card Number: </b>
                  <span>{numberVal}</span>
                </p>
                <p>
                  <b>Expiry Year: </b>
                  <span>{expiryYearVal}</span>
                </p>
                <p>
                  <b>Expiry Month: </b>
                  <span>{expiryMonthVal}</span>
                </p>
                <p>
                  <b>CVC (CVV): </b>
                  <span>{cvcVal}</span>
                </p>
                <p>
                  <b>Post/Zip Code: </b>
                  <span>{postalZipCodeVal}</span>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          className="border border-black p-8 rounded-lg h-fit"
          lg={{ span: 8, offset: 2 }}
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
              {shippingMethods?.length > 0
                ? shippingMethods?.map(
                    (shipMethod) => shipMethod?.price?.formatted_with_symbol
                  )
                : '$0.00'}
            </Col>
          </Row>
          <Divider className="border" />
          <Row className="p-4">
            <Col className="font-bold text-xl" span={16}>
              Total
            </Col>
            <Col className="text-right font-bold text-xl" span={8}>
              {shippingMethods?.length > 0
                ? '$' +
                  Number(
                    Number(subtotal?.formatted) +
                      Number(
                        shippingMethods?.map(
                          (shipMethod) => shipMethod?.price?.formatted
                        )
                      )
                  )
                : subtotal?.formatted_with_symbol}
            </Col>
          </Row>
          <Divider className="border" />
          <Payment />
          <Form.Item>
            <button
              onClick={() => {
                flagRef.current = true;
              }}
              type="submit"
              className={`hover:border-[#272727] border hover:text-[#272727] font-bold rounded-full hover:bg-transparent bg-black px-7 text-white ease-out duration-300 text-lg w-full py-4 mt-10`}
            >
              {isButtonLazyLoading && flagRef.current === true ? (
                <LazyButtonLoading />
              ) : (
                'PLACE ORDER'
              )}
              {/* PLACE ORDER */}
            </button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
});
