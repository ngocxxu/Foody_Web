/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  return (
    <>
      <p className='text-lg text-center font-bold mt-2'>
        Login into your account
      </p>
      <Form
        name='basic'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input size='large' placeholder='Your email' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password size='large' placeholder='Password' />
        </Form.Item>
        <div className='flex justify-between items-center mb-6'>
          <Form.Item
            name='remember'
            noStyle
            // valuePropName='checked'
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div>
            <a className='login-form-forgot' href='#'>
              Forgot?
            </a>
          </div>
        </div>
        <Form.Item>
          <Button
            className='login-btn'
            type='primary'
            htmlType='submit'
            block
            size='large'
          >
            LOGIN
          </Button>
          <div className='mt-4'>
            <Button
              className='create-btn'
              type='danger'
              block
              size='large'
              onClick={() => navigate('/register')}
            >
              CREATE AN ACCOUNT
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
