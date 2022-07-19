import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss'

export const ErrorTemplate = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container flex items-center justify-center">
      <div className='absolute top-3/4 -translate-y-8 left-50 z-10 text-center'>
        <p className='font-bold text-xl '>
          Oops! We can't seem to find the page you're looking for.
        </p>
        <p
          className='text-lg cursor-pointer underline'
          onClick={() => navigate('/home')}
        >
          Click here to Homepage
        </p>
      </div>
    </div>
  )
}
