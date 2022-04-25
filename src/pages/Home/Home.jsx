import React from "react";
import { Carousel } from "../../template/HomeTemplate/Carousel/Carousel";
import borderSlider from "../../assets/images/others/back-23.png";
import "./Home.scss";
import { BannerHome } from "../../components/BannerHome/BannerHome";

export const Home = () => {
  return (
    <>
      <Carousel />
      <div className="bg-border-slider max-w-full lg:block hidden">
        <img className="w-full" src={borderSlider} alt="borderSlider" />
      </div>
      <BannerHome />
    </>
  );
};
