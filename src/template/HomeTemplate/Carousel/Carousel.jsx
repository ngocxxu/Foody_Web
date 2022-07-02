import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import slider1 from "../../../assets/images/carousel/slider-8.jpg";
import slider2 from "../../../assets/images/carousel/slider-9.jpg";
import slider3 from "../../../assets/images/carousel/slider-10.jpg";

export const Carousel = () => {
  const settings = {
    lazyLoad: true,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings_2 = {
    lazyLoad: true,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 10 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 10 }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="">
      <div className="carousel-slick lg:block hidden">
        <Slider {...settings}>
          <div>
            {/* <img src={slider1} alt="slider1" /> */}
            <div
              className="bg_slider1 flex justify-center items-center"
              style={{
                background: `url(${slider1})`,
              }}
            >
              <div className="bg_slider1_text absolute">
                <h1>
                  COMBO PIZZA <br /> WITH SPECIAL PRICE
                </h1>
                <div className="bg_slider1_text2">
                  <span>Buy any 2 large pizzas and get a 1.5L Pepsi Free</span>
                </div>
              </div>
              <button
                className="bg_slider1_button z-10 translate-y-28 ease-out duration-300"
                type="button"
              >
                ORDER NOW
              </button>
            </div>
          </div>
          <div>
            {/* <img src={slider1} alt="slider1" /> */}
            <div
              className="bg_slider1 flex justify-center items-center"
              style={{
                background: `url(${slider2})`,
              }}
            >
            </div>
          </div>
          <div>
            {/* <img src={slider1} alt="slider1" /> */}
            <div
              className="bg_slider1 flex justify-center items-center"
              style={{
                background: `url(${slider3})`,
              }}
            >
              <div className="bg_slider1_text absolute">
                <h1>
                  CRISPY FRIED <br /> CHICKEN NOT SPICY
                </h1>
                <div className="bg_slider1_text2">
                  <span>Buy any 2 large pizzas and get a 1.5L Pepsi Free</span>
                </div>
              </div>
              <button
                className="bg_slider1_button z-10 translate-y-28 ease-out duration-300"
                type="button"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="block lg:hidden">
        <Slider {...settings_2}>
          <div>
            <img src={slider1} alt="slider1" />
          </div>
          <div>
            <img src={slider2} alt="slider2" />
          </div>
          <div>
            <img src={slider3} alt="slider3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
