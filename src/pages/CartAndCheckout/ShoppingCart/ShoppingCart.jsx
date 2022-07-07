import { Col, InputNumber, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import product11 from '../../../assets/images/product/Products-11-600x600.jpg';
import { ButtonCustom11 } from '../../../components/Button/Button';

export const ShoppingCart = () => {
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
          <Row className="border-b p-4" align="middle">
            <Col span={9}>
              <Row align="middle">
                <Col span={6}>
                  <img className="w-10 lg:w-16" alt="food" src={product11} />
                </Col>
                <Col span={18}>
                  <NavLink className='text-xs lg:text-base' to="/shop/burgers/12">American Burgers</NavLink>
                </Col>
              </Row>
            </Col>
            <Col span={3}>$79.00</Col>
            <Col span={6}>
              <InputNumber
                size="large"
                min={1}
                max={50}
                defaultValue={3}
                // onChange={onChange}
                style={{ width: 150 }}
                title="Quantity"
              />
            </Col>
            <Col span={4}>$79.00</Col>
            <Col span={2}></Col>
          </Row>
          <Row className="border-b p-4" align="middle">
            <Col span={9}>
              <Row align="middle">
                <Col span={6}>
                  <img className="w-10 lg:w-16" alt="food" src={product11} />
                </Col>
                <Col span={18}>
                  <NavLink className='text-xs lg:text-base' to="/shop/burgers/12">American Burgers</NavLink>
                </Col>
              </Row>
            </Col>
            <Col span={3}>$79.00</Col>
            <Col span={6}>
              <InputNumber
                size="large"
                min={1}
                max={50}
                defaultValue={3}
                // onChange={onChange}
                style={{ width: 150 }}
                title="Quantity"
              />
            </Col>
            <Col span={4}>$79.00</Col>
            <Col span={2}></Col>
          </Row>
          <Row className="p-4">
            <Col className="my-auto text-xs lg:text-base" md={{ span: 6, offset: 11 }}>
              <NavLink to="/shop">Continue Shopping</NavLink>
            </Col>
            <Col span={5}>
              <ButtonCustom11 className="text-md lg:text-lg" textButton="Update Cart" />
            </Col>
          </Row>
        </div>
      </Col>
      <Col className='mt-4 lg:mt-0'
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
            <Col span={12}>$79.00</Col>
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
              $79.00
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
