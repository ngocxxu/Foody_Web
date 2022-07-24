import React from 'react';
import { BreadcrumbURL } from '../../components/Breadcrumb/BreadcrumbURL';
import comingSoon from '../../assets/images/others/coming-soon.gif';
import './BlogDetail.scss';

export const BlogDetail = () => {
  return (
    <div className='container-blog'>
      <div className='lg:pt-28'>
        <div className='bg-blog flex flex-col items-center justify-center py-8'>
          <h1 className='text-6xl '>Blogs</h1>
          <BreadcrumbURL />
        </div>
        <div className='flex justify-center items-center'>
          <img className='block my-10' src={comingSoon} alt='comingSoon' />
        </div>
      </div>
    </div>
  );
};
