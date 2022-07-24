import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../firebase';

export const ProtectedLoginRoutes = ({ redirectPath = -1, children }) => {
  const currentUser = useAuth();
  const navigate = useNavigate();

  if (currentUser) {
    navigate(redirectPath);
  }

  return children ? children : <Outlet />;
};
