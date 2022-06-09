import { Col, Row } from "antd";
import { Button } from "antd/lib/radio";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Checkout } from "../Checkout/Checkout";

export const ShoppingCart = () => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col span={16}>
        <div className="border">
          <Row className="p-4">
            <Col span={9}>Product</Col>
            <Col span={3}>Price</Col>
            <Col span={6}>Quantity</Col>
            <Col span={6}>Subtotal</Col>
          </Row>
          <Row className="border-t border-b p-4">
            <Col span={9}>American Burgers</Col>
            <Col span={3}>$79.00</Col>
            <Col span={6}>Quantity</Col>
            <Col span={6}>$79.00</Col>
          </Row>
          <Row className="p-4">
            <Col span={6} offset={12}>
              <NavLink to="/shop">Continue Shopping</NavLink>
            </Col>
            <Col span={6}>
              <Button
                shape="round"
                size={"large"}
                // disabled
              >
                Update Cart
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={6} offset={2}>
        <Checkout />
      </Col>
    </Row>
  );
};
