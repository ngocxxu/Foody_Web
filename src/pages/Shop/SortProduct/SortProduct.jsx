import React from "react";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export const SortProduct = () => {
  return (
    <>
      <Select
        defaultValue="Default Sorting"
        style={{
          width: 210,
        }}
        onChange={handleChange}
      >
        <Option value="defaultSorting">Default Sorting</Option>
        <Option value="popularity">Sort By Popularity</Option>
        <Option value="averageRating">Sort By Average Rating</Option>
        <Option value="latest">Sort By Latest</Option>
        <Option value="priceLowToHigh">Sort By Price: Low To High</Option>
        <Option value="priceHighToLow">Sort By Price: High To Low</Option>
      </Select>
    </>
  );
};
