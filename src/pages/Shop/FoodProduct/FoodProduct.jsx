import React from "react";
import { InputNumber, Rate } from "antd";
import "./FoodProduct.scss";
import { ReactComponent as HeartSVG } from "../../../assets/svg/heart-2.svg";
import {
  ButtonCustom10,
  ButtonCustom9,
} from "../../../components/Button/Button";

const onChange = (value) => {
  console.log("changed", value);
};

export const FoodProduct = () => {
  return (
    <div className="container-food w-3/4 pt-28 mx-auto">
      <div className="border-t-2 ">Home/Shop/Burgers/Alsatian</div>
      <div className="grid grid-cols-2 gap-2">
        <div>Image</div>
        <div>
          <h1>Alsatian</h1>
          <h2>$75.00</h2>
          <Rate disabled defaultValue={2} />
          <div className="border" />
          <p>
            The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium
            weight fleece comfort all year around. Feel better in this
            sweatshirt because Hanes keeps plastic bottles of landfills by using
            recycled polyester.7.8 ounce fleece sweatshirt made with up to 5
            percent polyester created from recycled plastic.
          </p>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <InputNumber
                size="large"
                min={1}
                max={50}
                defaultValue={3}
                onChange={onChange}
                style={{ width: 150 }}
              />
            </div>
            <ButtonCustom9 textButton="ADD TO CART" />
          </div>
          <ButtonCustom10 textButton="BUY IT NOW" />
          <div className="cursor-pointer group flex">
            <HeartSVG className="group-hover:fill-[#f1252b]" fill="#e9e9e9" />
            <p className="group-hover:text-[#f1252b]">Add to wishlist</p>
          </div>
          <div className="border" />
          <div>
            <p>
              SKU: <span>D1118</span>
            </p>
            <p>
              CATEGORY: <span>BURGERS</span>
            </p>
            <p>
              TAGS: <span>HOT, MEN</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
