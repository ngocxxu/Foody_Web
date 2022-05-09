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

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/shop/burgers" element={<Shop />}/>
          <Route path="/shop/sauces" element={<Shop />}/>
          <Route path="/shop/starbucks" element={<Shop />}/>
          <Route path="/shop/sandwich" element={<Shop />}/>
          <Route path="/shop/kids-menu" element={<Shop />}/>
          <Route path="/shop/combo-offer" element={<Shop />}/>
          <Route path="/shop/kids-menu" element={<Shop />}/>
          <Route path="/shop/pizza-menu" element={<Shop />}/>
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
