import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../../../components/ProductItem/ProductItem";
import { getAllProducts } from "../../../services/ProductsService";
import "./SaleProduct.scss";

const settings = {
  infinite: true,
  slidesToShow: 5,
  swipeToSlide: true,
  // autoplay: true,
  // autoplaySpeed: 5000,
  // speed: 2000,
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
  const { dataProductList } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="sale-product w-3/4 lg:w-11/12">
      <Slider {...settings}>
        {dataProductList !== null &&
          dataProductList.map((product) => (
            <div>
              <ProductItem product={product} />
            </div>
          ))}
      </Slider>
    </div>
  );
};
