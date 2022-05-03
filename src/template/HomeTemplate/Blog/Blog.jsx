import React from "react";
import Slider from "react-slick";
import { BlogItem } from "../../../components/BlogItem/BlogItem";
import "./Blog.scss";

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  dots: false,
};

export const Blog = () => {
  return (
    <>
      <div className="blog py-16 mx-auto">
        <Slider {...settings}>
          <div>
            <BlogItem
              title="SIMPLE MILLS ALMOND FLOUR"
              description="Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat."
            />
          </div>
          <div>
            <BlogItem
              title="SIMPLE MILLS ALMOND FLOUR"
              description="Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat."
            />
          </div>
          <div>
            <BlogItem
              title="SIMPLE MILLS ALMOND FLOUR"
              description="Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat."
            />
          </div>
          <div>
            <BlogItem
              title="SIMPLE MILLS ALMOND FLOUR"
              description="Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat."
            />
          </div>
          <div>
            <BlogItem
              title="SIMPLE MILLS ALMOND FLOUR"
              description="Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat."
            />
          </div>
          <div>
            <BlogItem
              title="SIMPLE MILLS ALMOND FLOUR"
              description="Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat."
            />
          </div>
          <div>
            <BlogItem
              title="SIMPLE MILLS ALMOND FLOUR"
              description="Our products go beyond free-from to for-more. Not just simple and real - but purposeful and nutrition packed. You are what you eat."
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
