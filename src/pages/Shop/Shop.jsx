import { BarsOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Drawer, Slider, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { BreadcrumbURL } from '../../components/Breadcrumb/BreadcrumbURL';
import { ItemsFoodSlick } from '../../components/ItemsFoodSlick/ItemsFoodSlick';
import { SET_RANGE_PRICE } from '../../redux/consts/const';
import { getListCategory } from '../../services/ProductsService';
import { categoryList } from './categoryList';
import { ListItemProducts } from './ListProducts/ListItemProducts';
import './Shop.scss';

const breadcrumbNameMap = {
  shop: 'Shop',
  burgers: 'Burgers',
  sauces: 'Sauces',
  starbucks: 'Starbucks',
  sandwich: 'Sandwich',
  'combo-offer': 'Combo Offer',
  'kids-menu': 'Kids Menu',
  'pizza-menu': 'Pizza Menu',
};

const TitleBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  return (
    <>
      <div>
        <h1 className="text-6xl">{breadcrumbNameMap[pathSnippets.pop()]}</h1>
      </div>
    </>
  );
};

export const Shop = () => {
  const {
    listCategory: { data: listCategories },
  } = useSelector((state) => state.shopReducer);
  const [foodPrice, setFoodPrice] = useState([0, 100]);
  const dispatch = useDispatch();

  const onChangePrice = (value) => {
    setFoodPrice(value);
  };

  const onAfterChangePrice = (value) => {
    dispatch({
      type: SET_RANGE_PRICE,
      payload: value,
    });
  };

  useEffect(() => {
    dispatch(getListCategory());
  }, [dispatch]);

  const DrawerSearch = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };

    return (
      <>
        <Space>
          <Button
            size="large"
            type="primary"
            icon={<BarsOutlined />}
            onClick={showDrawer}
          />
        </Space>
        <Drawer
          placement="left"
          width={250}
          onClose={onClose}
          visible={visible}
          extra={
            <Space>
              <Button onClick={onClose} icon={<CloseOutlined />} />
            </Space>
          }
        >
          <div className="contain-items-category">
            <div>
              <h1 className="text-lg">CATEGORIES</h1>
              <div>
                {categoryList.map((item, index) => {
                  return (
                    <NavLink
                      to={item.url}
                      className="text-[#868686]"
                      key={index}
                    >
                      <div className="flex justify-between items-center">
                        <p>{item.nameCategory}</p>
                        <p className="text-center text-xs w-5 h-5 leading-5 bg-gray-200 rounded-full">
                          {item.numberOfCategories}
                        </p>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className="text-lg">PRICE</h1>
              <div>
                <Slider
                  range
                  defaultValue={[0, 100]}
                  onChange={onChangePrice}
                  onAfterChange={onAfterChangePrice}
                />
              </div>
              <p>{`Range : $${foodPrice[0]} - $${foodPrice[1]}`}</p>
            </div>
          </div>
        </Drawer>
      </>
    );
  };

  return (
    <div className="container-shop">
      <div className="flex justify-center items-center lg:pt-28">
        <div className="bg-shop py-8 flex flex-col items-center justify-center">
          <TitleBreadcrumb />
          <BreadcrumbURL />
          <ItemsFoodSlick />
        </div>
      </div>
      <div className="contain-items lg:w-[1200px] grid lg:grid-cols-4 gap-2 mx-auto lg:mt-10">
        <div className="contain-items-category block lg:hidden m-4">
          <DrawerSearch />
        </div>
        <div className="contain-items-category lg:block hidden">
          <div>
            <h1 className="text-lg">CATEGORIES</h1>
            <div>
              {listCategories
                ?.filter((i) =>
                  categoryList.find((item) => item.nameCategory === i.name)
                )
                .map((item) => {
                  return (
                    <NavLink
                      to={
                        categoryList.find((i) => i.nameCategory === item.name)
                          ?.url
                      }
                      className="text-[#868686]"
                      key={item.id}
                    >
                      <div className="flex justify-between items-center">
                        <p>{item.name}</p>
                        <p className="text-center text-xs w-5 h-5 leading-5 bg-gray-200 rounded-full">
                          {item.products}
                        </p>
                      </div>
                    </NavLink>
                  );
                })}
            </div>
          </div>
          <div>
            <h1 className="text-lg">PRICE</h1>
            <div>
              <Slider
                range
                defaultValue={[0, 100]}
                onChange={onChangePrice}
                onAfterChange={onAfterChangePrice}
              />
            </div>
            <p>{`Range : $${foodPrice[0]} - $${foodPrice[1]}`}</p>
          </div>
        </div>
        <div className="contain-items-products lg:col-span-3">
          <div>
            <ListItemProducts />
          </div>
        </div>
      </div>
    </div>
  );
};
