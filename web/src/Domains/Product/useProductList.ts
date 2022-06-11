import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Product, ProductListProps } from './types';
import { mockProductList } from './mockData';

const productListURL = 'http://localhost:3000/products';

const useProductList = ({ search, filter }: ProductListProps): Product[] => {
  const [productList, setProductList] = useState<Product[]>([]);
  const getProductList = useCallback(async () => {
    setProductList(mockProductList);
    // try {
    //   const queryURL = new URL(productListURL);
    //   if (search) queryURL.searchParams.append('search', search);
    //   if (filter) queryURL.searchParams.append('filter', filter);
    //   const response = await axios.get(queryURL.toString());
    //   setProductList(response.data.products);
    // } catch (error) {
    //   console.error('Can not get product list: ', error);
    // }
  }, [search]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  return productList;
};

export default useProductList;
