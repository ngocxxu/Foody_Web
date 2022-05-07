import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonBigCustom6 } from "../../../components/Button/Button";
import "./ListProduct.scss";
import { OptionsFood } from "./OptionsFood/OptionsFood";

export const ListProduct = () => {
  return (
    <div className="list-product mt-16">
      <OptionsFood />
      <div className="flex justify-center items-center">
        <NavLink to="/product">
          <ButtonBigCustom6 className="mt-8" textButton="ALL PRODUCTS" />
        </NavLink>
      </div>
    </div>
  );
};
