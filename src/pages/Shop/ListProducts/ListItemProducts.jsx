import React from 'react';
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { ProductItem } from "../../../components/ProductItem/ProductItem";
import commerce from "../../../utils/settings";
import { SortProduct } from "../SortProduct/SortProduct";
import "./ListItemProducts.scss";

export const ListItemProducts = () => {
  const [dataTable, setDataTable] = useState({
    minValue: 0,
    maxValue: 9,
  });

  const [dataProducts, setDataProducts] = useState([] || null);

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

  const getAllProducts = async () => {
    try {
      const result = await commerce.products.list();
      if (result.data) {
        setDataProducts(result.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="mb-12">
      <div className="lg:flex justify-between items-center lg:ml-0 ml-4">
        <div className="hidden lg:block">
          {`Showing ${dataTable.minValue + 1} - ${dataTable.maxValue} of ${
            dataProducts.length
          } item(s)`}
        </div>
        <SortProduct />
      </div>
      <>
        <div className="lg:grid lg:grid-cols-3 gap-2 ">
          {dataProducts !== null &&
            dataProducts
              .slice(dataTable.minValue, dataTable.maxValue)
              .map((product) => (
                  <ProductItem product={product} />
              ))}
        </div>
        <Pagination
          className="lg:flex justify-center items-center"
          defaultCurrent={1}
          defaultPageSize={9}
          onChange={handleChange}
          total={15}
        />
      </>
    </div>
  );
};
