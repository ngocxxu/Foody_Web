import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { TOGGLE_CREATE_ACCOUNT } from '../../../redux/consts/const';
import { useDispatch } from 'react-redux';
import './LoginUser.scss';

export const LoginUser = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <h1 className='text-2xl text-center font-bold mt-2'>
        SIGN IN
      </h1>
      <Form
        name='basic'
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

        <Form.Item
          name='remember'
          // valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            shape='round'
            size='large'
          >
            LOGIN
          </Button>
          <div className='mt-4'>
            <Button
              type='danger'
              shape='round'
              size='large'
              onClick={() =>
                dispatch({
                  type: TOGGLE_CREATE_ACCOUNT,
                  createAcount: true,
                })
              }
            >
              CREATE AN ACCOUNT
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
