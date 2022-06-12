import { Injectable } from '@nestjs/common';

import * as MOCKED_PRODUCT_LIST from './datasources/product-mock-up.json';
import { Product } from './models/Product';

@Injectable()
export class ProductService {
  getProductList(): Product[] {
    return MOCKED_PRODUCT_LIST;
  }
}
