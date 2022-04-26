import React from "react";
import { Carousel } from "../../template/HomeTemplate/Carousel/Carousel";
import borderSlider from "../../assets/images/others/back-23.png";
import "./Home.scss";
import { BannerHome } from "../../components/BannerHome/BannerHome";
import { ItemsFoodSlick } from "../../components/ItemsFoodSlick/ItemsFoodSlick";

export const Home = () => {
  return (
    <>
      <Carousel />
      <div className="bg-border-slider max-w-full lg:block hidden">
        <img className="w-full" src={borderSlider} alt="borderSlider" />
      </div>
      <BannerHome />
      <ItemsFoodSlick />
      <div className="bg-poster-time relative">
        <div className="absolute top-1/4 left-0 right-0 translate-y-6">
          <h1 className="text-3xl font-extrabold ">GOLDEN HOUR</h1>
          <div className="text-xl font-bold flex justify-center items-center">
            <div className="m-4 lg:m-6">
              <span>
                28 <br /> DAYS
              </span>
            </div>
            <div className="m-4 lg:m-6">
              <span>
                08 <br /> HRS
              </span>
            </div>
            <div className="m-4 lg:m-6">
              <span>
                42 <br /> MINS
              </span>
            </div>
            <div className="m-4 lg:m-6">
              <span>
                10 <br /> SECS
              </span>
            </div>
          </div>
          <div className="text-[##5A5A5A] font-medium">Friday 5pm - 8pm</div>
          <div className="text-[##5A5A5A] font-medium">
            35% off All premium pizzas
          </div>
        </div>
      </div>
    </>
  );
};
