/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Breadcrumb } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  "/shop": "Shop",
  "/shop/burgers": "Burgers",
  "/shop/soda-water": "Soda Water",
  "/shop/starbucks": "Starbucks",
  "/shop/sandwich": "Sandwich",
  "/shop/combo-offer": "Combo Offer",
  "/shop/kids-menu": "Kids Menu",
  "/shop/pizza-menu": "Pizza Menu",
  "/product": "Product",
  "/blog": "Blog",
  "/contact": "Contact",
};

export const BreadcrumbURL = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <NavLink to={url}>{breadcrumbNameMap[url]}</NavLink>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <NavLink to="/home">Home</NavLink>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </>
  );
};
