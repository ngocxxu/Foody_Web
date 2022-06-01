import React from "react";
import { InputNumber, Rate, Tabs } from "antd";
import "./FoodProduct.scss";
import { ReactComponent as HeartSVG } from "../../../assets/svg/heart-2.svg";
import {
  ButtonCustom10,
  ButtonCustom9,
} from "../../../components/Button/Button";
import { BreadcrumbURL } from "../../../components/Breadcrumb/BreadcrumbURL";
import { EditOutlined } from "@ant-design/icons";

const onChange = (value) => {
  // console.log("changed", value);
};

const { TabPane } = Tabs;

const onChangeTab = (key) => {
  // console.log(key);
};

const FoodReview = () => {
  return (
    <div className="mt-6 lg:mb-12 text-base">
      <h1 className='text-2xl'>Reviews</h1>
      <p className="lg:mb-12 mb-6">There are no reviews yet.</p>
      <div className='border-2 rounded-full inline p-6'>
        <EditOutlined style={{ fontSize: "30px" }} />
        <span className='pl-4'>BE THE FIRST TO REVIEW “CHEESECAKE”</span>
      </div>
      <p className='lg:mt-12 mt-6'>
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-[#f1252b]">*</span>
      </p>
      <div>
        Your rating <Rate defaultValue={2} />
      </div>
      <div></div>
    </div>
  );
};

export const FoodProduct = () => {
  return (
    <div className="container-food w-3/4 pt-28 mx-auto">
      <div className="border-t py-4">
        <BreadcrumbURL />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>Image</div>
        <div>
          <h1 className="text-3xl font-medium">Alsatian</h1>
          <h2 className="text-2xl text-[#f1252b] font-medium">$75.00</h2>
          <Rate disabled defaultValue={2} />
          <hr />
          <p className="py-7 text-[#8d8d8d] text-base">
            The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium
            weight fleece comfort all year around. Feel better in this
            sweatshirt because Hanes keeps plastic bottles of landfills by using
            recycled polyester.7.8 ounce fleece sweatshirt made with up to 5
            percent polyester created from recycled plastic.
          </p>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="my-auto">
              <InputNumber
                size="large"
                min={1}
                max={50}
                defaultValue={3}
                onChange={onChange}
                style={{ width: 150 }}
                title="Quantity"
              />
            </div>
            <ButtonCustom9
              className="py-4 text-base  "
              textButton="ADD TO CART"
            />
          </div>
          <ButtonCustom10 className="py-4 text-base " textButton="BUY IT NOW" />
          <div className="cursor-pointer group flex py-7">
            <div className="group-hover:bg-[#f1252b] p-4 rounded-full border-2 group-hover:border-2 group-hover:border-[#f1252b] ease-out duration-300">
              <HeartSVG className="group-hover:fill-[#fff]" fill="#8d8d8d" />
            </div>
            <p className="group-hover:text-[#f1252b] ml-2 my-auto text-base">
              Add to wishlist
            </p>
          </div>
          <hr />
          <div className="py-4">
            <p className="text-xs text-[#8d8d8d]">
              SKU: <span className="text-black">D1118</span>
            </p>
            <p className="text-xs text-[#8d8d8d]">
              CATEGORY: <span className="text-black">BURGERS</span>
            </p>
            <p className="text-xs text-[#8d8d8d]">
              TAGS: <span className="text-black">HOT, MEN</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t" />
      <div className="mt-6">
        <Tabs defaultActiveKey="1" centered large onChange={onChangeTab}>
          <TabPane className="text-[#8d8d8d] text-base leading-7 mt-6 lg:mb-12" tab="Description" key="1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </TabPane>
          <TabPane className="text-[#8d8d8d]" tab="Reviews (0)" key="2">
            <FoodReview/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
