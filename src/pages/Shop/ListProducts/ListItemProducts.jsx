import { Pagination } from "antd";
import React, { useState } from "react";
import { ProductItem } from "../../../components/ProductItem/ProductItem";
import { SortProduct } from "../SortProduct/SortProduct";
import "./ListItemProducts.scss";

export const ListItemProducts = () => {
  const [dataTable, setDataTable] = useState({
    minValue: 0,
    maxValue: 9,
  });

  let data = [
    { title: "Card title1", value: "Card content1" },
    { title: "Card title2", value: "Card content2" },
    { title: "Card title3", value: "Card content3" },
    { title: "Card title4", value: "Card content4" },
    { title: "Card title5", value: "Card content5" },
    { title: "Card title6", value: "Card content6" },
    { title: "Card title7", value: "Card content7" },
    { title: "Card title8", value: "Card content8" },
    { title: "Card title9", value: "Card content9" },
    { title: "Card title10", value: "Card content10" },
    { title: "Card title11", value: "Card content11" },
    { title: "Card title12", value: "Card content12" },
    { title: "Card title13", value: "Card content13" },
    { title: "Card title14", value: "Card content14" },
    { title: "Card title15", value: "Card content15" },
  ];

  const handleChange = (page) => {
    if (page <= 1) {
      setDataTable({
        minValue: 0,
        maxValue: 9,
      });
    } else {
      setDataTable({
        minValue: dataTable.maxValue,
        maxValue: page * 9,
      });
    }
  };

  return (
    <div className="mb-12">
      <div className="lg:flex justify-between items-center lg:ml-0 ml-4">
        <div className="hidden lg:block">
          {`Showing ${dataTable.minValue + 1} - ${dataTable.maxValue} of ${
            data.length
          } item(s)`}
        </div>
        <SortProduct />
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-2 ">
        {data &&
          data.length > 0 &&
          data
            .slice(dataTable.minValue, dataTable.maxValue)
            .map((product) => <ProductItem product={product} />)}
      </div>
      <Pagination
        className="lg:flex justify-center items-center"
        defaultCurrent={1}
        defaultPageSize={9}
        onChange={handleChange}
        total={15}
      />
    </div>
  );
};
