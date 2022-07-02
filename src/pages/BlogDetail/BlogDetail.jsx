import React from "react";
import { BreadcrumbURL } from "../../components/Breadcrumb/BreadcrumbURL";
import "./BlogDetail.scss";

export const BlogDetail = () => {
  return (
    <div className="container-blog">
      <div className="lg:pt-28">
        <div className="bg-blog flex flex-col items-center justify-center py-8">
          <h1 className="text-6xl ">Blogs</h1>
          <BreadcrumbURL />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
