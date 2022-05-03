import React from "react";
import {NavLink} from "react-router-dom"
import "./BlogItem.scss";
import { Card } from "antd";
import blog1 from "../../assets/images/blog/Blog-1-720x484.jpg";
import { ButtonCustom5 } from "../Button/Button";

const { Meta } = Card;
export const BlogItem = ({ title, description, ...props }) => {
  return (
    <div className="blog_item lg:m-4">
      <Card
        style={{ width: 450 }}
        cover={<img alt="blog1" src={blog1} />}
        actions={[<NavLink to='/blog'>
          <ButtonCustom5 textButton="READ MORE" />
        </NavLink>]}
      >
        <Meta title={title} description={description} />
      </Card>
    </div>
  );
};
