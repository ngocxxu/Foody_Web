import { Tabs } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../services/ProductsService";
import { ProductItem } from "../../../../components/ProductItem/ProductItem";
import "./OptionsFood.scss";

const { TabPane } = Tabs;
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="options-food">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="BURGERS" key="1">
            <div className="flex justify-center items-center flex-wrap mt-6">
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
            </div>
          </TabPane>
          <TabPane tab="COMBO OFFER" key="2">
          <div className="flex justify-center items-center flex-wrap mt-6">
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
            </div>
          </TabPane>
          <TabPane tab="KIDS MENU" key="3">
          <div className="flex justify-center items-center flex-wrap mt-6">
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
            </div>
          </TabPane>
          <TabPane tab="PIZZA MENU" key="4">
          <div className="flex justify-center items-center flex-wrap mt-6">
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
            </div>
          </TabPane>
          <TabPane tab="SANDWICH" key="5">
          <div className="flex justify-center items-center flex-wrap mt-6">
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
              <div className="card-item">
                <ProductItem />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
