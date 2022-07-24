import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { ProtectedRoutes } from './pages/Auth';
import { ProtectedLoginRoutes } from './pages/Auth/ProtectedLoginRoutes';
import { BlogDetail } from './pages/BlogDetail/BlogDetail';
import { CartAndCheckout } from './pages/CartAndCheckout/CartAndCheckout';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { FoodProduct } from './pages/Shop/FoodProduct/FoodProduct';
import { Shop } from './pages/Shop/Shop';
import { ErrorTemplate } from './template/ErrorTemplate/ErrorTemplate';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import { OrderSuccessTemplate } from './template/OrderSuccessTemplate';
import { Login } from './template/UserTemplate/LoginUser/Login';
import { ResetPassword } from './template/UserTemplate/LoginUser/ResetPassword';
import { Register } from './template/UserTemplate/RegisterUser/Register';
import { RegisterSuccess } from './template/UserTemplate/RegisterUser/SuccessRegister';
import { UserTemplate } from './template/UserTemplate/UserTemplate';

export const arrayCategory = [
  'burgers',
  'soda-water',
  'starbucks',
  'sandwich',
  'combo-offer',
  'kids-menu',
  'pizza-menu',
];

function App() {
  return (
    <BrowserRouter>
      <Routes className='App'>
        <Route element={<HomeTemplate />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          {arrayCategory.map((item, index) => (
            <Route key={index} path={`/shop/${item}`} element={<Shop />} />
          ))}
          {arrayCategory.map((item, index) => (
            <Route
              key={index}
              path={`/shop/${item}/:foodId`}
              element={<FoodProduct />}
            />
          ))}
          <Route path='/blog' element={<BlogDetail />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path={`/shop/:foodId`} element={<FoodProduct />} /> */}
          {/* <Route path='/shop/burgers/:foodId' element={<Product />} /> */}
          {/* <Route path='/shopping-cart' element={<ShoppingCart />} /> */}
          {/* <Route path='/checkout' element={<Checkout />} /> */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/cart-checkout/:id' element={<CartAndCheckout />} />
          </Route>
        </Route>
        <Route element={<UserTemplate />}>
          <Route element={<ProtectedLoginRoutes />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reset-password' element={<ResetPassword />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route
              path='/register/register-success'
              element={<RegisterSuccess />}
            />
            <Route
              path='/reset-password/success'
              element={<RegisterSuccess />}
            />
          </Route>
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path='/order-success' element={<OrderSuccessTemplate />} />
        </Route>
        <Route path='*' element={<ErrorTemplate />} />
        {/* The default page web will navigate to /home */}
        {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
