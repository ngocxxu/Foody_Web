import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../assets/images/carousel/banner-6.jpg';
import banner2 from '../../assets/images/carousel/banner-7.jpg';
import banner3 from '../../assets/images/carousel/banner-8.jpg';
import './BannerHome.scss';

export const BannerHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:block hidden relative">
        <div className="flex justify-center items-center -translate-y-3/4 absolute top-0 left-0 right-0">
          <div className="relative">
            <div className="banner_banner1 ">
              <img src={banner1} alt="banner1" />
              <div className="text_banner1 absolute top-0 left-10 flex flex-col justify-evenly h-full">
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    DRINKS <br /> OFFER
                  </h1>
                  <p className=" text-white">
                    Buy any 2 large pizzas <br /> and get a 1.5L Pepsi Free
                  </p>
                </div>
                <button className="border-white border text-white text-xs font-bold rounded-full hover:border-red-600 hover:bg-red-600 ease-out duration-300">
                  <a
                    className="block text-white hover:text-white px-7 py-3"
                    href="#options-foods"
                  >
                    ORDER NOW
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="banner_banner1 ">
              <img src={banner2} alt="banner1" />
              <div className="text_banner1 absolute top-0 left-10 flex flex-col justify-evenly h-full">
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    COMBO <br /> PIZZA
                  </h1>
                  <p className=" text-white">
                    Buy any 2 large pizzas <br /> and get a 1.5L Pepsi Free
                  </p>
                </div>
                <button className="border-white border text-white text-xs font-bold  rounded-full hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-black ease-out duration-300">
                  <a
                    className="block text-white hover:text-black px-7 py-3"
                    href="#options-foods"
                  >
                    FREE SHIPPING
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="banner_banner1 ">
              <img src={banner3} alt="banner1" />
              <div className="text_banner1 absolute top-0 left-10 flex flex-col justify-evenly h-full">
                <div>
                  <h1 className="text-3xl font-bold">
                    EXPLORE <br /> FOOD
                  </h1>
                  <p className="">
                    Order Your Favouriate
                    <br /> Food to day
                  </p>
                </div>
                <button
                  onClick={() => navigate('/shop')}
                  className="border-black border text-xs font-bold  rounded-full px-7 py-3 hover:border-red-600 hover:bg-red-600 hover:text-white ease-out duration-300"
                >
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="">
          <div className="relative m-4">
            <div className="banner_banner1">
              <img style={{ height: '220px' }} src={banner1} alt="banner1" />
              <div className="text_banner1 absolute top-0 left-10 flex flex-col justify-evenly h-full">
                <div>
                  <h1 className="text-lg-3xl text-xl font-bold text-white">
                    DRINKS <br /> OFFER
                  </h1>
                  <p className=" text-white">
                    Buy any 2 large pizzas <br /> and get a 1.5L Pepsi Free
                  </p>
                </div>
                <button className="border-white border text-white text-xs font-bold rounded-full px-7 py-3 hover:border-red-600 hover:bg-red-600 ease-out duration-300">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
          <div className="relative m-4">
            <div className="banner_banner1">
              <img src={banner2} alt="banner1" />
              <div className="text_banner1 absolute top-0 left-10 flex flex-col justify-evenly h-full">
                <div>
                  <h1 className="text-lg-3xl text-xl font-bold text-white">
                    COMBO <br /> PIZZA
                  </h1>
                  <p className=" text-white">
                    Buy any 2 large pizzas <br /> and get a 1.5L Pepsi Free
                  </p>
                </div>
                <button className="border-white border text-white text-xs font-bold  rounded-full px-7 py-3 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-black ease-out duration-300">
                  FREE SHIPPING
                </button>
              </div>
            </div>
          </div>
          <div className="relative m-4">
            <div className="banner_banner1">
              <img src={banner3} alt="banner1" />
              <div className="text_banner1 absolute top-0 left-10 flex flex-col justify-evenly h-full">
                <div>
                  <h1 className="text-lg-3xl text-xl font-bold">
                    EXPLORE <br /> FOOD
                  </h1>
                  <p className="">
                    Order Your Favouriate
                    <br /> Food to day
                  </p>
                </div>
                <button className="border-black border text-xs font-bold  rounded-full px-7 py-3 hover:border-red-600 hover:bg-red-600 hover:text-white ease-out duration-300">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
