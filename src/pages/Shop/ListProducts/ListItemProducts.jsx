import { Pagination } from 'antd';
import { useCallback } from 'react';
import { memo } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoading } from '../../../components/LazyLoading/LazyLoading';
import { ProductItem } from '../../../components/ProductItem/ProductItem';
import { getAllProducts } from '../../../services/ProductsService';
import { SortProduct } from '../SortProduct/SortProduct';
import './ListItemProducts.scss';

export const ListItemProducts = memo(() => {
  const { dataProductList } = useSelector((state) => state.productReducer);
  const { isLazyLoading } = useSelector((state) => state.othersReducer);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="mb-12">
      <div className="lg:flex justify-between items-center lg:ml-0 ml-4">
        <div className="hidden lg:block">
          {`Showing ${dataTable.minValue + 1} - ${dataTable.maxValue} of ${
            dataProductList.length
          } item(s)`}
        </div>
        <SortProduct />
      </div>
      {isLazyLoading ? (
        <LazyLoading />
      ) : (
        <>
          <div className="lg:grid lg:grid-cols-3 gap-2 ">
            {dataProductList !== null &&
              dataProductList
                .slice(dataTable.minValue, dataTable.maxValue)
                .map((product) => <ProductItem key={product.id} product={product} />)}
          </div>
          <Pagination
            className="lg:flex justify-center items-center"
            defaultCurrent={1}
            defaultPageSize={9}
            onChange={handleChange}
            total={15}
          />
        </>
      )}
    </div>
  );
});
