import Countdown from "antd/lib/statistic/Countdown";
import React from "react";
import borderSlider from "../../assets/images/others/back-42.png";
import fastDelivery from "../../assets/svg/fast-delivery.svg";
import { BannerHome } from "../../components/BannerHome/BannerHome";
import { ButtonBigCustom3 } from "../../components/Button/Button";
import { Blog } from "../../template/HomeTemplate/Blog/Blog";
import { Carousel } from "../../template/HomeTemplate/Carousel/Carousel";
import { LibraryPicture } from "../../template/HomeTemplate/LibraryPicture/LibraryPicture";
import { ListProduct } from "../../template/HomeTemplate/ListProduct/ListProduct";
import { SaleProduct } from "../../template/HomeTemplate/SaleProduct/SaleProduct";
import "./Home.scss";

export const Home = () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 14;

  return (
    <div className="bg-[#f3efe6]">
      <Carousel />
      <div className="bg-border-slider max-w-full lg:block hidden  ">
        <img className="w-full" src={borderSlider} alt="borderSlider" />
      </div>
      <BannerHome />
      {/* <ItemsFoodSlick /> */}
      {/* Time Hours Component */}
      <div className="mt-20 lg:mt-40">
        <div className="lg:flex justify-center items-center">
          <div className="lg:text-right text-center">
            <div className="text-3xl font-extrabold mb-0">
              <span className="time-hour text-base font-medium -translate-y-2 bg-[#f1252b] text-white">
                Tasty & Crunchy
              </span>
              Offers of the week!
            </div>
            <p className="mb-0 text-lg">
              Inspired by recipes and creations of world’s best chefs
            </p>
          </div>
          <div className="bg-[#ffb219] ml-4 px-4 rounded font-bold flex justify-center items-center">
            <Countdown
              valueStyle={{
                fontSize: "3rem",
                color: "#242422",
              }}
              value={deadline}
              format="D : H : m : s"
            />
            {/* <div className="m-2  text-center bg-[#ffb219] p-3">
              <span>
                28 <br /> DAYS
              </span>
            </div>
            <div>:</div>
            <div className="m-2  text-center bg-[#ffb219] p-3">
              <span>
                08 <br /> HRS
              </span>
            </div>
            <div>:</div>
            <div className="m-2  text-center bg-[#ffb219] p-3">
              <span>
                42 <br /> MINS
              </span>
            </div>
            <div>:</div>
            <div className="m-2  text-center bg-[#ffb219] p-3">
              <span>
                10 <br /> SECS
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-14 flex justify-center items-center">
        <SaleProduct />
      </div>
      {/* Rush Hours Component */}
      <div className="bg-poster-time mt-20 relative">
        <div className="absolute top-1/4 left-0 right-0">
          <div className="lg:text-right ">
            <div className="flex justify-center items-center">
              <img src={fastDelivery} alt="rushHours" />
            </div>
            <div className="lg:text-7xl text-4xl font-extrabold mb-0 text-white text-center italic">
              15 MINUTES
            </div>
            <div className="text-xl lg:text-3xl font-extrabold mb-0 text-white text-center italic">
              YOU ORDER WE DELIVER
            </div>
          </div>
          <div className="mt-10">
            <ButtonBigCustom3 textButton="MAKE AN ORDER" />
          </div>
        </div>
      </div>
      <ListProduct />
      <div className="flex justify-center items-center">
        <Blog />
      </div>
      <LibraryPicture />
    </div>
  );
};
