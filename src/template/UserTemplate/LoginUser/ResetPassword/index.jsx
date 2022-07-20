import { Button, Form, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleResetPassword } from '../../../../services/UserService';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(
      handleResetPassword(values, () => navigate('/reset-password/success'))
    );
  };

  return (
    <>
      <p className='text-lg text-center font-bold mt-2 mb-4'>
        Forgot your password?
      </p>
      <Form
        name='basic'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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
        <Button
          htmlType='submit'
          className='bg-black mb-4'
          type='primary'
          block
          size='large'
        >
          Reset Password
        </Button>
      </Form>
      <p
        className='cursor-pointer text-blue-500'
        onClick={() => navigate('/login')}
      >
        Back to Login
      </p>
    </>
  );
};
