import React from 'react';
import Slider from 'react-slick';
import { BlogItem } from '../../../components/BlogItem/BlogItem';
import './Blog.scss';

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  // swipeToSlide: true,
  // slidesToScroll: 3,
  // centerMode: true,
  // variableWidth: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const arrContent = [
  {
    title: 'SIMPLE MILLS ALMOND FLOUR',
    description:
      'Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat.',
  },
  {
    title: 'SIMPLE MILLS ALMOND FLOUR',
    description:
      'Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat.',
  },
  {
    title: 'SIMPLE MILLS ALMOND FLOUR',
    description:
      'Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat.',
  },
  {
    title: 'SIMPLE MILLS ALMOND FLOUR',
    description:
      'Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat.',
  },
  {
    title: 'SIMPLE MILLS ALMOND FLOUR',
    description:
      'Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat.',
  },
  {
    title: 'SIMPLE MILLS ALMOND FLOUR',
    description:
      'Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat.',
  },
];

export const Blog = () => {
  return (
    <>
      <div className="blog py-16 w-full lg:w-4/5">
        <Slider {...settings}>
          {arrContent.map((item, index) => {
            return (
              <div key={index}>
                <BlogItem title={item.title} description={item.description} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
