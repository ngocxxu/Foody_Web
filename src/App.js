import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import { Home } from "./pages/Home/Home";
import "./App.scss";
import { ErrorTemplate } from "./template/ErrorTemplate/ErrorTemplate";
import { Shop } from "./pages/Shop/Shop";
import { BlogDetail } from "./pages/BlogDetail/BlogDetail";
import { Product } from "./pages/Product/Product";
import { Contact } from "./pages/Contact/Contact";
import { FoodProduct } from "./pages/Shop/FoodProduct/FoodProduct";

const arrayCategory = [
  "burgers",
  "sauces",
  "starbucks",
  "sandwich",
  "combo-offer",
  "kids-menu",
  "pizza-menu",
];

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {arrayCategory.map((item, index) => (
            <Route key={index} path={`/shop/${item}`} element={<Shop />} />
          ))}
          {arrayCategory.map((item, index) => (
            <Route key={index} path={`/shop/${item}/:foodId`} element={<FoodProduct />} />
          ))}
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorTemplate />}></Route>
        {/* The default page web will navigate to /home */}
        {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
