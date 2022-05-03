import React from "react";
import Slider from "react-slick";
import { ProductItem } from "../../../components/ProductItem/ProductItem";
import "./SaleProduct.scss";

const settings = {
  infinite: true,
  slidesToShow: 5,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const SaleProduct = () => {
  return (
    <div className="sale-product w-3/4 lg:w-11/12">
      <Slider {...settings}>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
      </Slider>
    </div>
  );
};
