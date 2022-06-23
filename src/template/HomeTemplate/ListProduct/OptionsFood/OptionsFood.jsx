import { Tabs } from 'antd';
import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../services/ProductsService';
import { ProductItem } from '../../../../components/ProductItem/ProductItem';
import './OptionsFood.scss';
import { LazyLoading } from '../../../../components/LazyLoading/LazyLoading';

const { TabPane } = Tabs;
const tabsData = [
  'Burgers',
  'Combo Offer',
  'Kids Menu',
  'Pizza Menu',
  'Sandwich',
];
export const OptionsFood = () => {
  // const { burgers, comboOffer, kidsMenu, pizzaMenu, sandwich } =
  //   useContext(StoreContext);

  // const toggleOptionsFood = (numberOpt) => {
  //   switch(numberOpt){
  //     case 1:
  //       return burgers[1](true);
  //     case 2:
  //       return comboOffer[1](true);
  //     default:
  //       return null;
  //   }
  // };

  const { dataProductList } = useSelector((state) => state.productReducer);
  const { isLazyLoading } = useSelector((state) => state.othersReducer);
  const dispatch = useDispatch();

  const handleRenderCategoryProduct = useCallback(
    (tabName) => {
      return dataProductList
        .filter((item) =>
          item.categories.find(
            (f) => f.name === tabName
          )
        )
        .map((product) => {
          return (
            <div key={product.id}>
              <ProductItem product={product} />
            </div>
          );
        });
    },
    [dataProductList]
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="options-food">
      <div className="card-container">
        <Tabs type="card">
          {tabsData.map((tab, index) => (
            <TabPane tab={tab.toUpperCase()} key={index + 1}>
              {isLazyLoading ? (
                <LazyLoading />
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-2 mt-6 lg:w-3/4 mx-auto">
                  {dataProductList !== null &&
                    handleRenderCategoryProduct(tab)}
                </div>
              )}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
