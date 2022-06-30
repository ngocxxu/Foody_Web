import { Pagination } from 'antd';
import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { LazyLoading } from '../../../components/LazyLoading/LazyLoading';
import { ProductItem } from '../../../components/ProductItem/ProductItem';
import { getAllProducts, getAllSaleProducts } from '../../../services/ProductsService';
import { SortProduct } from '../SortProduct/SortProduct';
import './ListItemProducts.scss';

export const ListItemProducts = memo(() => {
  const { dataProductList } = useSelector((state) => state.productReducer);
  const { isLazyLoading } = useSelector((state) => state.othersReducer);
  const { rangePrice } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [dataTable, setDataTable] = useState({
    minValue: 0,
    maxValue: 9,
  });

  const handleChange = useCallback(
    (page) => {
      if (page <= 1) {
        setDataTable({
          minValue: 0,
          maxValue: 9,
        });
      } else {
        setDataTable({
          minValue: dataTable.maxValue,
          maxValue: page * 9,
        });
      }
    },
    [dataTable]
  );

  // console.log({dataProductList})

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllSaleProducts());
  }, [dispatch]);

  // Prepare f.slug === 'burgers' - pathname.split('/').filter((i) => i).pop() === 'burgers'
  const handleArrayDataProductList = useCallback(() => {
    const newDataProductList = dataProductList.filter((item) =>
      item.categories.find(
        (f) =>
          f.slug ===
          pathname
            .split('/')
            .filter((i) => i)
            .pop()
      )
    );

    // Handle if URL only contain Shop (ex: /shop) and didn't have any category besides (ex: /shop/sauces)
    if (pathname.split('/').filter((i) => i).length <= 1) {
      return dataProductList;
    } else {
      return newDataProductList;
    }
  }, [dataProductList, pathname]);

  const handleRenderCategoryFood = useCallback(() => {
    return handleArrayDataProductList()
      .slice(dataTable.minValue, dataTable.maxValue)
      .filter(
        (item) =>
          item.price.raw > rangePrice[0] && item.price.raw < rangePrice[1]
      )
      .map((product) => {
        return (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        );
      });
  }, [
    handleArrayDataProductList,
    dataTable.minValue,
    dataTable.maxValue,
    rangePrice,
  ]);

  return (
    <div className="mb-12">
      <div className="lg:flex justify-between items-center lg:ml-0 ml-4">
        <div className="hidden lg:block">
          {`Showing ${dataTable.minValue + 1} - ${
            handleArrayDataProductList().length < 9
              ? handleArrayDataProductList().length
              : dataTable.maxValue
          } of ${handleArrayDataProductList().length} item(s)`}
        </div>
        <SortProduct />
      </div>
      {isLazyLoading ? (
        <LazyLoading />
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-2 mt-6 mx-auto">
            {dataProductList !== null && handleRenderCategoryFood()}
          </div>
          {handleArrayDataProductList().length >= 9 && (
            <Pagination
              className="flex justify-center items-center"
              defaultCurrent={1}
              defaultPageSize={9}
              onChange={handleChange}
              total={15}
            />
          )}
        </>
      )}
    </div>
  );
});
