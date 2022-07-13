/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import pic1 from "../../../assets/images/blog/insta-1.jpg";
import pic2 from "../../../assets/images/blog/insta-2.jpg";
import pic3 from "../../../assets/images/blog/insta-3.jpg";
import pic4 from "../../../assets/images/blog/insta-4.jpg";
import pic5 from "../../../assets/images/blog/insta-5.jpg";
import "./LibraryPicture.scss";

export const LibraryPicture = () => {
  return (
    <div className="lib-picture flex items-center justify-center flex-col lg:flex-row">
      <div className="image_insta">
        <a className="image_insta_item" href="#">
          <img src={pic1} alt="pic1" />
        </a>
        <div className="overlay">
          <div className="overlay_text">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="image_insta">
        <a className="image_insta_item" href="#">
          <img src={pic2} alt="pic2" />
        </a>
        <div className="overlay">
          <div className="overlay_text">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="image_insta">
        <a className="image_insta_item" href="#">
          <img src={pic3} alt="pic3" />
        </a>
        <div className="overlay">
          <div className="overlay_text">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="image_insta">
        <a className="image_insta_item" href="#">
          <img src={pic4} alt="pic4" />
        </a>
        <div className="overlay">
          <div className="overlay_text">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="image_insta">
        <a className="image_insta_item" href="#">
          <img src={pic5} alt="pic5" />
        </a>
        <div className="overlay">
          <div className="overlay_text">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
