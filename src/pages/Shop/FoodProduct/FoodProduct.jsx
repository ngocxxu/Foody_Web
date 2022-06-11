/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Form, Input, Button, InputNumber, Rate, Tabs } from "antd";
import Slider from "react-slick";
import "./FoodProduct.scss";
import { ReactComponent as HeartSVG } from "../../../assets/svg/heart-2.svg";
import {
  ButtonCustom10,
  ButtonCustom9,
} from "../../../components/Button/Button";
import { BreadcrumbURL } from "../../../components/Breadcrumb/BreadcrumbURL";
import { EditOutlined } from "@ant-design/icons";
import { SaleProduct } from "../../../template/HomeTemplate/SaleProduct/SaleProduct";

const settings = {
  customPaging: function (i) {
    return (
      <a>
        <img
          alt="product"
          src={require(`../../../assets/images/product/Products-${
            i + 14
          }-600x600.jpg`)}
        />
      </a>
    );
  },
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CarouselFood = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            alt="product"
            src={require("../../../assets/images/product/Products-14-600x600.jpg")}
          />
        </div>
        <div>
          <img
            alt="product"
            src={require("../../../assets/images/product/Products-15-600x600.jpg")}
          />
        </div>
        <div>
          <img
            alt="product"
            src={require("../../../assets/images/product/Products-16-600x600.jpg")}
          />
        </div>
        <div>
          <img
            alt="product"
            src={require("../../../assets/images/product/Products-17-600x600.jpg")}
          />
        </div>
      </Slider>
    </div>
  );
};

const onChange = (value) => {
  // console.log("changed", value);
};

const { TabPane } = Tabs;

const onChangeTab = (key) => {
  // console.log(key);
};

const onFinish = (values) => {
  //console.log('Finish:', values);
};

const FoodReview = () => {
  const [form] = Form.useForm();

  return (
    <div className="mt-6 lg:mb-12 text-base">
      <div>
        <h1 className="text-2xl">
          1 review for <span className="text-[#f1252b]">Alsatian</span>
        </h1>
        <div className="border p-5 rounded-xl">
          <div className="lg:flex justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 bg-red-400 rounded-full"></div>
              <div className="ml-4 my-auto">
                <div className="text-black font-semibold">WPBINGO</div>
                <div>February 22, 2021</div>
              </div>
            </div>
            <div className="mb-auto ml-20 lg:ml-0">
              <Rate defaultValue={2} />
            </div>
          </div>
          <div className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="lg:mt-12 mt-4 border-2 border-gray-500 rounded-full w-fit p-4">
          <EditOutlined style={{ fontSize: "25px" }} />
          <span className="pl-4">ADD A REVIEW</span>
        </div>
      </div>
      {/* <div>
        <h1 className="text-2xl">Reviews</h1>
        <p className="lg:mb-12 mb-6">There are no reviews yet.</p>
        <div className="border-2 border-gray-500 rounded-full w-fit p-4">
          <EditOutlined style={{ fontSize: "30px" }} />
          <span className="pl-4">BE THE FIRST TO REVIEW “CHEESECAKE”</span>
        </div>
      </div> */}
      <p className="lg:mt-12 mt-6">
        Your email address will not be published. Required fields are marked
        <span className="text-[#f1252b]">*</span>
      </p>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="rate" label="Your Rating">
          <Rate defaultValue={2} />
        </Form.Item>
        <div className="lg:grid grid-cols-2 gap-5">
          <div>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input size="large" placeholder="Name*" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input size="large" placeholder="Email*" />
            </Form.Item>
            <Form.Item>
              <Button
                className="mt-2"
                size="large"
                block
                htmlType="submit"
                type="primary"
              >
                SUBMIT
              </Button>
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="intro"
              rules={[{ required: true, message: "Please input your Reviews" }]}
            >
              <Input.TextArea
                size="large"
                placeholder="Your Reviews*"
                showCount
                maxLength={100}
                rows={7}
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

const RelatedProducts = () => {
  return (
    <>
      <h1
        className="relative text-center text-3xl mt-8 after:content-[''] 
      after:w-20 after:h-0.5 after:bg-red-500 after:absolute 
      after:top-12 after:left-1/2 after:-translate-x-1/2"
      >
        Related Products
      </h1>
      <div className="flex items-center justify-center">
        <SaleProduct />
      </div>
    </>
  );
};

export const FoodProduct = () => {
  return (
    <div className="container-food w-3/4 pt-28 mx-auto">
      <div className="border-t py-4">
        <BreadcrumbURL/>
      </div>
      <div className="lg:grid grid-cols-2 gap-2">
        <div>
          <CarouselFood />
        </div>
        <div className="mt-16 lg:mt-0">
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
              className="lg:py-4 lg:text-base"
              textButton="ADD TO CART"
            />
          </div>
          <ButtonCustom10
            className="py-4 lg:text-base "
            textButton="BUY IT NOW"
          />
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
      <hr className="border-t mt-6" />
      <div className="mt-6">
        <Tabs defaultActiveKey="1" centered large onChange={onChangeTab}>
          <TabPane
            className="text-[#8d8d8d] text-base leading-7 mt-6 lg:mb-12"
            tab="Description"
            key="1"
          >
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
            <FoodReview />
          </TabPane>
        </Tabs>
      </div>
      <hr className="border-t mt-6" />
      <RelatedProducts />
    </div>
  );
};
