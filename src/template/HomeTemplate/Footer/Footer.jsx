/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import logoFooter from "../../../assets/images/others/logo-white.png";
import creditIcon from "../../../assets/images/others/credit.png"
import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <div className="section_footer">
        <div className="content_footer mx-auto pt-12">
          <div className="lg:flex items-center justify-between">
            <div>
              <img src={logoFooter} alt="logoFooter" width='140px' />
            </div>
            <div className="py-auto divider_separator my-4 lg:my-0 lg:mx-32">
            </div>
            <div>
              <ul className="list_social_footer flex ">
                <li className="block mt-3">
                  <a
                    className="group fa_icon border rounded-full p-4 hover:border-[#f1252b] hover:bg-[#f1252b]"
                    href="#"
                  >
                    <i class="fa-brands fa-twitter text-[#8d8d8d] text-lg group-hover:text-white ease-out duration-300"></i>
                  </a>
                </li>
                <li className="block mt-3">
                  <a
                    className="group fa_icon border rounded-full p-4 hover:border-[#f1252b] hover:bg-[#f1252b]"
                    href="#"
                  >
                    <i class="fa-brands fa-instagram text-[#8d8d8d] text-lg group-hover:text-white ease-out duration-300"></i>
                  </a>
                </li>
                <li className="block mt-3">
                  <a
                    className="group fa_icon border rounded-full p-4 hover:border-[#f1252b] hover:bg-[#f1252b]"
                    href="#"
                  >
                    <i class="fa-brands fa-dribbble text-[#8d8d8d] text-lg group-hover:text-white ease-out duration-300"></i>
                  </a>
                </li>
                <li className="block mt-3">
                  <a
                    className="group fa_icon border rounded-full p-4 hover:border-[#f1252b] hover:bg-[#f1252b]"
                    href="#"
                  >
                    <i class="fa-brands fa-behance text-[#8d8d8d] text-lg group-hover:text-white ease-out duration-300"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex items-center justify-between py-10">
            <div>
              <h4 className="text-white text-lg font-bold">BOOK A TABLE</h4>
              <p className="text-[#8d8d8d] font-semibold">
                Save time with proper planning
              </p>
              <h1 className="text-[#ffb219] text-4xl">902 432 397</h1>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                OPENING HOURS
              </h4>
              <p className="text-[#8d8d8d] font-semibold">
                Mon – Fri: 10:00 Am – 01:00 Am
              </p>
              <p className="text-[#8d8d8d] font-semibold">
                Saturday: 11:00 Am To Midnight
              </p>
              <p className="text-[#8d8d8d] font-semibold">
                Sunday: <span className="text-red-800">Kitchen Closed</span>
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">USEFUL LINKS</h4>
              <p className="group font-semibold">
                <NavLink
                  className="text-[#8d8d8d] group-hover:text-white ease-out duration-300"
                  to="/"
                >
                  Wishlist
                </NavLink>
              </p>
              <p className="group font-semibold">
                <a
                  className="text-[#8d8d8d] group-hover:text-white ease-out duration-300"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>
              <p className="group font-semibold">
                <a
                  className="text-[#8d8d8d] group-hover:text-white ease-out duration-300"
                  href="#"
                >
                  Order Tracking
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">ADDRESS</h4>
              <p className="text-[#8d8d8d] font-semibold">
                Tran Hung Dao, Dist 1, HCM City
              </p>
              <p className="text-[#8d8d8d] font-semibold">
                ngocquach43@gmail.com
              </p>
              <p className="text-[#8d8d8d] font-semibold">01-800-81200</p>
            </div>
          </div>
          <div className="lg:flex items-center justify-around bg-[#f1252b] py-5">
            <p className="text-white font-bold text-2xl hover:italic ease-out duration-400 my-auto cursor-pointer">
              NEWSLETTER
            </p>
            <div>
              <input className="input_mail lg:px-40 py-3" type="text" placeholder="Your Email" />
            </div>
            <p className="text-white font-bold text-2xl hover:italic ease-out duration-400 my-auto cursor-pointer">
              SUBSCRIBE
            </p>
          </div>
          <div className="lg:flex items-center justify-between py-6">
            <p className="text-[#8d8d8d] font-semibold my-auto">Copyright © 2022 Papzi. Ngoc Quach</p>
            <div>
              <img className="block my-auto" src={creditIcon} alt='creditIcon' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
