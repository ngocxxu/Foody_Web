import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export const OrderSuccessTemplate = () => {
  const navigate = useNavigate();

  return (
    <div className='order-success-container relative flex items-center justify-center'>
      <div className='absolute top-2/3 translate-y-10 left-50 z-10 text-center'>
        <p className='font-bold text-xl text-white'>
          Your order is being processed by us, please check your e-mail for more
          details.
        </p>
        <p
          className='text-lg cursor-pointer underline text-white'
          onClick={() => navigate('/home')}
        >
          Click here to Homepage
        </p>
      </div>
    </div>
  );
};
