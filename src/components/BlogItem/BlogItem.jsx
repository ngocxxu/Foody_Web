import { Card } from 'antd';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonCustom5 } from '../Button/Button';
import './BlogItem.scss';

const { Meta } = Card;
export const BlogItem = memo(({ title, description, ...props }) => {
  return (
    <div className='blog_item lg:m-4'>
      <Card
        style={{ width: 450 }}
        cover={<img alt='blog1' src='https://random.imagecdn.app/450/250' />}
        actions={[
          <NavLink to='/blog'>
            <ButtonCustom5 textButton='READ MORE' />
          </NavLink>,
        ]}
      >
        <Meta title={title} description={description} />
      </Card>
    </div>
  );
});
