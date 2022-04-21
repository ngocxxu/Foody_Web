import React, { useState } from "react";
import { Avatar, Badge, Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./Header.scss";
import logo from "../../../assets/images/others/logo.png";
import searchIcon from "../../../assets/svg/search.svg";
import userIcon from "../../../assets/svg/user-svgrepo-com.svg";
import heartIcon from "../../../assets/svg/heart-svgrepo-com.svg";
import cartIcon from "../../../assets/svg/shopping-basket-svgrepo-com.svg";
import menuIcon from "../../../assets/svg/menuu.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [toggleMenuMini, settoggleMenuMini] = useState(false);

  return (
    <>
      <div className="lg:block hidden">
        <div className="flex justify-between items-center my-7 mx-12">
          <div>
            <NavLink to="/home">
              <img width="120" height="46" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="w-full">
            <Menu className="" mode="horizontal" defaultSelectedKeys={["mail"]}>
              <Menu.Item key="mail">
                <NavLink to="/home">HOME</NavLink>
              </Menu.Item>
              <Menu.SubMenu key="SubMenu" title="SHOP">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    Navigation Two
                  </Menu.Item>
                  <Menu.Item key="disabled" disabled>
                    Navigation Three
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
              <Menu.Item>
                <NavLink to="/product">PRODUCT</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/blog">BLOG</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/contact">CONTACT</NavLink>
              </Menu.Item>
            </Menu>
          </div>
          <div className="flex space-x-3">
            <img
              className="cursor-pointer hover:-translate-y-1 ease-out duration-200"
              src={searchIcon}
              alt="heartIcon"
            />
            <img
              className="cursor-pointer hover:-translate-y-1 ease-out duration-200"
              src={userIcon}
              alt="userIcon"
            />
            <div className="background_badge_heart hover:-translate-y-1 ease-out duration-200">
              <Badge size="small" count={5}>
                <Avatar shape="square" size="large" src={heartIcon} />
              </Badge>
            </div>
            <div className="background_badge_cart drop-shadow-lg">
              <Badge size="small" count={5}>
                <Avatar shape="square" size="large" src={cartIcon} />
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <div className="flex justify-between items-center my-7 mx-8">
          <div>
            <div onClick={()=> settoggleMenuMini(!toggleMenuMini)}>
              <img className="cursor-pointer" src={menuIcon} alt="menuIcon" />
            </div>
            {toggleMenuMini && (
              <>
                <Menu
                  className=""                 
                  defaultSelectedKeys={["mail"]}
                >
                  <Menu.Item key="mail">
                    <NavLink to="/home">HOME</NavLink>
                  </Menu.Item>
                  <Menu.SubMenu key="SubMenu" title="SHOP">
                    <Menu.ItemGroup title="Item 1">
                      <Menu.Item key="app" icon={<AppstoreOutlined />}>
                        Navigation Two
                      </Menu.Item>
                      <Menu.Item key="disabled" disabled>
                        Navigation Three
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Menu.SubMenu>
                  <Menu.Item>
                    <NavLink to="/product">PRODUCT</NavLink>
                  </Menu.Item>
                  <Menu.Item>
                    <NavLink to="/blog">BLOG</NavLink>
                  </Menu.Item>
                  <Menu.Item>
                    <NavLink to="/contact">CONTACT</NavLink>
                  </Menu.Item>
                </Menu>
              </>
            )}
          </div>
          <div>
            <NavLink to="/home">
              <img width="110" height="41" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="background_badge_cart drop-shadow-lg">
            <Badge size="small" count={5}>
              <Avatar shape="square" size="large" src={cartIcon} />
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
};
