import React from "react";
import { Outlet } from 'react-router-dom';
import ScrollButton from "../../components/Others";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const HomeTemplate = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollButton />
    </>
  )
}

