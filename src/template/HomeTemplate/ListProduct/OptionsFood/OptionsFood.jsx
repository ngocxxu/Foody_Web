import { Tabs } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../services/ProductsService';
import { ProductItem } from '../../../../components/ProductItem/ProductItem';
import './OptionsFood.scss';
import { LazyLoading } from '../../../../components/LazyLoading/LazyLoading';

const { TabPane } = Tabs;
const tabsData = [
  'BURGERS',
  'COMBO OFFER',
  'KIDS MENU',
  'PIZZA MENU',
  'SANDWICH',
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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="options-food">
      <div className="card-container">
        <Tabs type="card">
          {tabsData.map((tab, index) => (
            <TabPane tab={tab} key={index + 1}>
              {isLazyLoading ? (
                <LazyLoading />
              ) : (
                <div className="flex justify-center items-center flex-wrap mt-6">
                  {dataProductList !== null &&
                    dataProductList.map((product) => (
                      <div>
                        <ProductItem product={product} />
                      </div>
                    ))}
                </div>
              )}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
