import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/images/others/logo.png';
import './UserTemplate.scss';

export const UserTemplate = () => {
  const location = useLocation();

  return (
    <div className='user-template relative flex justify-center items-center'>
      <div className='user-template_info flex justify-center flex-col items-center rounded bg-white'>
        <div>
          <img width='120' height='46' src={logo} alt='logo' />
        </div>
        <Outlet />
        {location.pathname !== '/register/register-success' && (
          <>
            <div>
              <p className='user-template_info_text relative'>Or Login With</p>
            </div>
            <div>
              <Button
                className='mr-1'
                type='default'
                icon={<GoogleOutlined />}
                size='large'
              >
                Google
              </Button>
              <Button
                className='ml-1'
                type='text '
                icon={<FacebookOutlined />}
                size='large'
              >
                Facebook
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
