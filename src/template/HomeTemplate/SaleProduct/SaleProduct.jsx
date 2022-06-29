import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { LazyLoading } from '../../../components/LazyLoading/LazyLoading';
import { ProductItem } from '../../../components/ProductItem/ProductItem';
import {
  getAllProducts,
  getAllSaleProducts,
} from '../../../services/ProductsService';
import './SaleProduct.scss';

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
  const { dataProductList, dataProductSaleList } = useSelector(
    (state) => state.productReducer
  );
  const { isLazyLoading } = useSelector((state) => state.othersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllSaleProducts());
  }, [dispatch]);

  const handleGetProductSaleList = useCallback(() => {
    const listSaleProduct = dataProductList.filter((item) =>
      dataProductSaleList.data[0]?.product_ids?.includes(item.id)
    );

    return listSaleProduct.map((product) => (
      <div key={product.id}>
        <ProductItem
          product={product}
        />
      </div>
    ));
  }, [dataProductSaleList, dataProductList]);

  return (
    <div className="sale-product w-3/4 lg:w-11/12">
      {isLazyLoading ? (
        <LazyLoading />
      ) : (
        <Slider {...settings}>
          {dataProductList !== null && handleGetProductSaleList()}
        </Slider>
      )}
    </div>
  );
};
