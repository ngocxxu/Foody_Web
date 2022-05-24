import React from "react";
import "./ProductItem.scss";
import { ReactComponent as HeartSVG } from "../../assets/svg/heart-2.svg";
import product1 from "../../assets/images/product/Products-14-600x600.jpg";
import { ButtonCustom8 } from "../Button/Button";
import { NavLink } from "react-router-dom";

export const ProductItem = ({ foodItem, product,...props}) => {
  return (
    <div className="product-item bg-white rounded-3xl p-4 m-4 ease-out duration-700">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="bg-[#00a950] drop-shadow-lg text-xs rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-white font-semibold">
            Hot
          </div>
          <div className="bg-[#f1252b] drop-shadow-lg text-xs ml-2 rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-white font-semibold">
            -50%
          </div>
        </div>
        <div className="cursor-pointer group">
          <HeartSVG
            className="group-hover:fill-[#ffb219] ease-out duration-300"
            fill="#e9e9e9"
          />
        </div>
      </div>
      <div>
        <img src={product1} alt="product1" />
      </div>
      <div className="text-center">
        <div>
          <div className="lg:text-lg text-sm font-bold">
            <NavLink to="/product" className="text-black hover:text-[#f1252b]">
              PIZZA PALACE
            </NavLink>
          </div>
          <div className="text-lg font-bold text-[#f1252b]">$400.00</div>
        </div>
        <div className="my-6">
          <ButtonCustom8 textButton="ADD TO CART" />
        </div>
      </div>
    </div>
  );
};
