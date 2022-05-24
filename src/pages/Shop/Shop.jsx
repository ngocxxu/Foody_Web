import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BreadcrumbURL } from "../../components/Breadcrumb/BreadcrumbURL";
import { ItemsFoodSlick } from "../../components/ItemsFoodSlick/ItemsFoodSlick";
import { categoryList } from "./categoryList";
import "./Shop.scss";
import {  Slider } from "antd";
import { ListItemProducts } from "./ListProducts/ListItemProducts";

const breadcrumbNameMap = {
  shop: "Shop",
  burgers: "Burgers",
  sauces: "Sauces",
  starbucks: "Starbucks",
  sandwich: "Sandwich",
  "combo-offer": "Combo Offer",
  "kids-menu": "Kids Menu",
  "pizza-menu": "Pizza Menu",
};

export const TitleBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  return (
    <>
      <div>
        <h1 className="text-6xl">{breadcrumbNameMap[pathSnippets.pop()]}</h1>
      </div>
    </>
  );
};

export const Shop = () => {
  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }

  return (
    <div className="container-shop">
      <div className="flex justify-center items-center pt-28">
        <div className="bg-shop py-8">
          <TitleBreadcrumb />
          <BreadcrumbURL />
          <ItemsFoodSlick />
        </div>
      </div>
      <div className="contain-items grid grid-cols-4 gap-2 mx-auto mt-10">
        <div className="contain-items-category">
          <div>
            <h1 className="text-lg">CATEGORIES</h1>
            <div>
              {categoryList.map((item, index) => {
                return (
                  <NavLink to={item.url} className="text-[#868686]" key={index}>
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
                defaultValue={[20, 50]}
                onChange={onChange}
                onAfterChange={onAfterChange}
              />
            </div>
            <p>Range : $13 - $286</p>
          </div>
        </div>
        <div className="contain-items-products col-span-3">
          <div>
              <ListItemProducts/>
          </div>
        </div>
      </div>
    </div>
  );
};
