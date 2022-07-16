import React from 'react'
import { useNavigate } from 'react-router-dom';

export const OrderSuccessTemplate = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <p>OrderSuccessTemplate</p>
    </div>
  )
}
