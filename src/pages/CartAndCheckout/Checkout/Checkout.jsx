/* eslint-disable no-template-curly-in-string */
import { Col, Divider, Form, Input, Row } from "antd";
import Title from "antd/lib/typography/Title";
import product11 from "../../../assets/images/product/Products-11-600x600.jpg";
import { ButtonCustom11 } from "../../../components/Button/Button";
import "./Checkout.scss";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const Checkout = () => {
  const onFinish = (values) => {
    console.log(values);
  };

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
              name={["user", "name"]}
              label="First name"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={["user", "name"]}
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={["user", "country-region"]}
              label="Country / Region"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={["user", "street_address"]}
              label="Street address"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={["user", "town-city"]}
              label="Town / City"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={["user", "postcode"]}
              label="Postcode"
              rules={[{ required: true }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item name={["user", "notes"]} label="Order notes (optional)">
              <Input.TextArea
                className="w-full"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </Form.Item>
          </Col>
          <Col className="border p-8 rounded-lg h-fit" span={8} offset={2}>
            <h1 className="text-2xl">Product</h1>
            <Row className="p-4 pb-0">
              <Col span={16}>
                <Row>
                  <Col span={8}>
                    <img className="w-10 lg:w-16" alt="food" src={product11} />
                  </Col>
                  <Col span={16}>
                    AMERICAN BURGERS
                    <Title level={5}>QTY: 1</Title>
                  </Col>
                </Row>
              </Col>
              <Col className="text-right" span={8}>
                $79.00
              </Col>
            </Row>
            <Row className="p-4 pb-0">
              <Col span={16}>
                <Row>
                  <Col span={8}>
                    <img className="w-10 lg:w-16" alt="food" src={product11} />
                  </Col>
                  <Col span={16}>
                    AMERICAN BURGERS
                    <Title level={5}>QTY: 1</Title>
                  </Col>
                </Row>
              </Col>
              <Col className="text-right" span={8}>
                $79.00
              </Col>
            </Row>
            <Divider className="border" />
            <Row className="p-4">
              <Col span={16}>Subtotal</Col>
              <Col className="text-right" span={8}>
                $280.00
              </Col>
            </Row>
            <Divider className="border" />
            <Row className="p-4">
              <Col span={16}>Shipping</Col>
              <Col className="text-right" span={8}>
                $280.00
              </Col>
            </Row>
            <Divider className="border" />
            <Row className="p-4">
              <Col span={16}>Total</Col>
              <Col className="text-right" span={8}>
                $280.00
              </Col>
            </Row>
            <Form.Item>
              <ButtonCustom11
                type="submit"
                className="text-lg w-full py-4 mt-8"
                textButton="PLACE ORDER"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
