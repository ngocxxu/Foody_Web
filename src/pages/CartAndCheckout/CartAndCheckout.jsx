import { Tabs } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./CartAndCheckout.scss";
import { Checkout } from "./Checkout/Checkout";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

const { TabPane } = Tabs;

export const CartAndCheckout = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const handleChangeTab = (key) => {
    navigate(`/cart-checkout/${key}`);
  };

  return (
    <div className="container-cart_checkout mx-auto">
      <div className="mw-full lg:pt-28">
        <Tabs size={"large"} activeKey={id} centered onChange={handleChangeTab}>
          <TabPane className='pt-8' tab="Shopping Cart(1)" key="1">
            <ShoppingCart />
          </TabPane>
          <TabPane className='pt-8' tab="Checkout" key="2">
            <Checkout />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
