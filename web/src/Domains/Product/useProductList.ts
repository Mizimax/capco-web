import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Product, ProductListProps } from './types';

const productListURL = 'http://localhost:3000/products';

const useProductList = ({ search, filter }: ProductListProps): Product[] => {
  const [productList, setProductList] = useState<Product[]>([]);
  const getProductList = useCallback(async () => {
    try {
      const queryURL = new URL(productListURL);
      if (search) queryURL.searchParams.append('search', search);
      if (Array.isArray(filter) && filter.length > 0)
        queryURL.searchParams.append('filter', filter.join(','));
      const response = await axios.get(queryURL.toString());
      setProductList(response.data);
    } catch (error) {
      console.error('Can not get product list: ', error);
    }
  }, [search, filter]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  return productList;
};

export default useProductList;
