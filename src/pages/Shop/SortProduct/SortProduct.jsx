import React, { useCallback } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import {
  DEFAULT_SORTING_SEARCH,
  LATEST_SEARCH,
  PRICE_HIGH_LOW_SEARCH,
  PRICE_LOW_HIGH_SEARCH,
} from '../../../redux/consts/const';
const { Option } = Select;

export const SortProduct = () => {
  const dispatch = useDispatch();
  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
    switch (value) {
      case 'defaultSorting':
        dispatch({
          type: DEFAULT_SORTING_SEARCH,
        });
        break;
      case 'priceLowToHigh':
        dispatch({
          type: PRICE_LOW_HIGH_SEARCH,
        });
        break;
      case 'priceHighToLow':
        dispatch({
          type: PRICE_HIGH_LOW_SEARCH,
        });
        break;
      case 'latest':
        dispatch({
          type: LATEST_SEARCH,
        });
        break;

      default:
        break;
    }
  }, []);

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
        <Option value="priceLowToHigh">Sort By Price: Low To High</Option>
        <Option value="priceHighToLow">Sort By Price: High To Low</Option>
        <Option value="latest">Sort By Latest</Option>
        {/* <Option value="popularity">Sort By Popularity</Option> */}
        {/* <Option value="averageRating">Sort By Average Rating</Option> */}
      </Select>
    </>
  );
};
