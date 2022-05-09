import React from "react";
import { useLocation } from "react-router-dom";
import { BreadcrumbURL } from "../../components/Breadcrumb/BreadcrumbURL";
import { ItemsFoodSlick } from "../../components/ItemsFoodSlick/ItemsFoodSlick";
import "./Shop.scss";

const breadcrumbNameMap = {
  "shop": "Shop",
  "burgers": "Burgers",
  "sauces": "Sauces",
  "starbucks": "Starbucks",
  "sandwich": "Sandwich",
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
  // pathSnippets.map((_, index) => {
  //   const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
  //   console.log("url", url);
  //   return (
  //     <div key={url}>
  //       <h1 className="text-6xl">{breadcrumbNameMap[url]}</h1>
  //     </div>
  //   );
  // });
};

export const Shop = () => {
  return (
    <div className="container-shop flex justify-center items-center pt-28">
      <div className="bg-shop py-8">
        <TitleBreadcrumb />
        <BreadcrumbURL />
        <ItemsFoodSlick />
      </div>
    </div>
  );
};
