import { Col, Row } from "antd";
import React from "react";

export const Checkout = () => {
  return (
    <div>
      <Row className="p-4">
        <Col span={24}>Cart totals</Col>
      </Row>
      <Row className="p-4">
        <Col span={12}>Subtotal</Col>
        <Col span={12}>$79.00</Col>
      </Row>
    </div>
  );
};
