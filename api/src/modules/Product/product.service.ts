import { Injectable } from '@nestjs/common';

import * as MOCKED_PRODUCT_LIST from './datasources/product-mock-up.json';
import { Product } from './models/Product';

interface ProductListInterface {
  search: string;
  filter: string[] | string;
}

@Injectable()
export class ProductService {
  getProductList({ search, filter }: ProductListInterface): Product[] {
    const mockedData = MOCKED_PRODUCT_LIST as Product[];
    if (search || filter) {
      return mockedData.filter((product) => {
        return (
          (search
            ? product.productTitle
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              product.productDetail.toLowerCase().includes(search.toLowerCase())
            : true) && (filter ? filter.includes(product.productType) : true)
        );
      });
    }
    return mockedData;
  }
}
