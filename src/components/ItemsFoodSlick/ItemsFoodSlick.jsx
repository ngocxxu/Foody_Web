import React from "react";
import Slider from "react-slick";
import "./ItemsFoodSlick.scss";
import category1 from "../../assets/images/carousel/Image-1.jpg";
import category2 from "../../assets/images/carousel/Image-2.jpg";
import category3 from "../../assets/images/carousel/Image-3.jpg";
import category4 from "../../assets/images/carousel/Image-4.jpg";
import category5 from "../../assets/images/carousel/Image-5.jpg";
import category6 from "../../assets/images/carousel/Image-6.jpg";
import { NavLink } from "react-router-dom";

export const ItemsFoodSlick = () => {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };

  const settings_2 = {
    // className: "slider variable-width",
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // variableWidth: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  return (
    <>
      <div className="slick-items-food mx-auto mt-10 lg:block hidden">
        <Slider {...settings}>
          <NavLink
            to="/shop/burgers"
            className=" relative cursor-pointer"
            style={{ width: 200 }}
          >
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category2}
                alt="category2"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              BURGERS
            </h3>
          </NavLink>
          <NavLink to="/shop/combo-offer" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category3}
                alt="category3"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              COMBO OFFER
            </h3>
          </NavLink>
          <NavLink to="/shop/kids-menu" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category4}
                alt="category4"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              KIDS MENU
            </h3>
          </NavLink>
          <NavLink to="/shop/pizza-menu" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category6}
                alt="category6"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              PIZZA MENU
            </h3>
          </NavLink>
          <NavLink to="/shop/sandwich" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category5}
                alt="category5"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              SANDWICH
            </h3>
          </NavLink>
          <NavLink to="/shop/sauces" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category1}
                alt="category1"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              SAUCES
            </h3>
          </NavLink>
          <NavLink to="/shop/starbucks" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category3}
                alt="category3"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              STARBUCKS
            </h3>
          </NavLink>
        </Slider>
      </div>
      <div className="slick-items-food-mobile block lg:hidden">
        <Slider {...settings_2}>
          <NavLink
            to="/product"
            className=" relative cursor-pointer"
            style={{ width: "250px" }}
          >
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category2}
                alt="category2"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              BURGERS
            </h3>
          </NavLink>
          <NavLink to="/product" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category3}
                alt="category3"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              COMBO OFFER
            </h3>
          </NavLink>
          <NavLink to="/product" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category4}
                alt="category4"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              KIDS MENU
            </h3>
          </NavLink>
          <NavLink to="/product" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category6}
                alt="category6"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              PIZZA MENU
            </h3>
          </NavLink>
          <NavLink to="/product" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category5}
                alt="category5"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              SANDWICH
            </h3>
          </NavLink>
          <NavLink to="/product" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category1}
                alt="category1"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              SAUCES
            </h3>
          </NavLink>
          <NavLink to="/product" className=" relative cursor-pointer">
            <div className="item-category">
              <img
                className="img-category block mx-auto ease-in duration-300"
                width="186"
                src={category3}
                alt="category3"
              />
            </div>
            <h3 className="absolute mt-2 top-3/4 left-0 right-0 text-center font-semibold ">
              STARBUCKS
            </h3>
          </NavLink>
        </Slider>
      </div>
    </>
  );
};
