/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleSignIn } from '../../../services/UserService';
import './LoginUser.scss';

export const Login = () => {
  const { isLazyLoading } = useSelector((state) => state.othersReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(handleSignIn(values, () => navigate(-1)));
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  return (
    <>
      <p className='container-login text-lg text-center font-bold mt-2 mb-4'>
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
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
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
          <div
            onClick={() => navigate('/reset-password')}
            className='login-form-forgot cursor-pointer text-blue-500'
          >
            Forgot?
          </div>
        </div>
        <Form.Item>
          <Button
            className='bg-black'
            type='primary'
            htmlType='submit'
            block
            size='large'
            disabled={isLazyLoading}
          >
            LOGIN
          </Button>
          <div className='mt-4'>
            <Button
              className='bg-gray-400'
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
