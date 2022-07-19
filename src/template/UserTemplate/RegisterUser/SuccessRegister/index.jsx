import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className='text-lg text-center font-bold mt-2'>
        Thank you for registering.
      </p>
      <p className='text text-center font-bold text-blue-500 mt-2 mb-4'>
        You have successfully logged in.
      </p>
      <Button
        className='bg-black mb-4'
        type='primary'
        block
        size='large'
        onClick={() => navigate('/')}
      >
        Back to Homepage
      </Button>
    </>
  );
};
