import { Button } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const RegisterSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === '/reset-password/success' ? (
        <>
          <p className='text-lg text-center font-bold mt-2'>
            Please to check your email
          </p>
          <p className='text text-center font-bold text-blue-500 mt-2 mb-4'>
            We have sent a password recover instructions to your email (maybe in
            trash mailbox).
          </p>
          <Button
            className='bg-black mb-4'
            type='primary'
            block
            size='large'
            onClick={() => navigate('/login')}
          >
            Back to Login
          </Button>
        </>
      ) : (
        <>
          <p className='text-lg text-center font-bold mt-2'>
            Thank you for registering
          </p>
          <p className='text text-center font-bold text-blue-500 mt-2 mb-4'>
            You have successfully logged in
          </p>
          <Button
            className='bg-black mb-4'
            type='primary'
            block
            size='large'
            onClick={() => navigate('/home')}
          >
            Back to Homepage
          </Button>
        </>
      )}
    </>
  );
};
