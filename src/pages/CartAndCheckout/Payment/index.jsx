import { Form, Input } from 'antd';
import React from 'react';
import './style.scss';

export const Payment = () => {
  return (
    <div className="payment-container bg-[#003663] p-4 rounded-md">
      <h1 className="text-2xl mb-4 text-white">Payment</h1>
      <Form.Item
        name={['card', 'number']}
        label="Card Number"
        rules={[{ required: true, pattern: /^[0-9]*$/ }]}
      >
        <Input maxLength={16} className="w-full" placeholder="4242 4242 4242 4242" />
      </Form.Item>
      <Form.Item
        name={['card', 'expiry_year']}
        label="Expiry Year"
        rules={[{ required: true, pattern: /^[0-9]*$/ }]}
      >
        <Input maxLength={4} className="w-full" placeholder="2030" />
      </Form.Item>
      <Form.Item
        name={['card', 'expiry_month']}
        label="Expiry Month"
        rules={[{ required: true, pattern: /^[0-9]*$/ }]}
        getValueProps={(value) => console.log(typeof(value))}
      >
        <Input maxLength={2} className="w-full" placeholder="03" />
      </Form.Item>
      <Form.Item
        name={['card', 'cvc']}
        label="CVC (CVV)"
        rules={[{ required: true, pattern: /^[0-9]*$/ }]}
      >
        <Input maxLength={3} className="w-full" placeholder="403" />
      </Form.Item>
      <Form.Item
        name={['card', 'postal_zip_code']}
        label="Post/Zip Code"
        rules={[{ required: true, pattern: /^[0-9]*$/ }]}
      >
        <Input maxLength={5} className="w-full" placeholder="40304" />
      </Form.Item>
    </div>
  );
};
