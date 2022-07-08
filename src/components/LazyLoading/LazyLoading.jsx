import { Spin } from 'antd';
import React from 'react';

export const LazyLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

export const LazyButtonLoading = () => {
  return (
    <>
      <Spin size="small" />
    </>
  );
};
