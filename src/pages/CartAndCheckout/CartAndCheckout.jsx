import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './CartAndCheckout.scss';
import { Checkout } from './Checkout/Checkout';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
import commerce from '../../services/settings';
import { OFF_LAZY_LOADING, ON_LAZY_LOADING } from '../../redux/consts/const';
import { LazyLoading } from '../../components/LazyLoading/LazyLoading';

const { TabPane } = Tabs;

export const CartAndCheckout = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const { isLazyLoading } = useSelector((state) => state.othersReducer);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const { total_unique_items } = cart ?? {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const handleChangeTab = (key) => {
    navigate(`/cart-checkout/${key}`);
  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        dispatch({
          type: ON_LAZY_LOADING,
        });
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        if (token) {
          Promise.all([
            setCheckoutToken(token),
            dispatch({
              type: OFF_LAZY_LOADING,
            }),
          ]);
        }
      } catch (error) {
        navigate('/');
      }
    };
    generateToken();
  }, [dispatch, cart, navigate]);

  return (
    <div className="container-cart_checkout mx-auto">
      <div className="mw-full lg:pt-28 pb-12">
        <Tabs size={'large'} activeKey={id} centered onChange={handleChangeTab}>
          <TabPane
            className="pt-8"
            tab={`Shopping Cart (${total_unique_items})`}
            key="1"
          >
            <ShoppingCart />
          </TabPane>
          <TabPane className="pt-8" tab="Checkout" key="2">
            {/* {isLazyLoading && checkoutToken &&  (
              <Checkout checkoutToken={checkoutToken} />
            )} */}
            {isLazyLoading && !checkoutToken ? <LazyLoading/> : <Checkout checkoutToken={checkoutToken} />}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
