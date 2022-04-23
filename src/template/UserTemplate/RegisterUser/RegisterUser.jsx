import React from "react";
import { Form, Input, Button } from "antd";
import "./LoginUser.scss";

export const RegisterUser = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <h1 className="text-2xl text-center font-bold mt-2">REGISTER</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input size="large" placeholder="Your email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            className="login-btn"
            type="primary"
            htmlType="submit"
            block
            shape="round"
            size="large"
          >
            REGISTER
          </Button>
          <div className="mt-4">
            <Button
              className="create-btn"
              type="danger"
              block
              shape="round"
              size="large"
            >
              ALREADY HAS AN ACCOUNT
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
