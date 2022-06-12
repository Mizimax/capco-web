import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import * as MOCKED_PRODUCT_LIST from './datasources/product-mock-up.json';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all products', () => {
    // Select all types of products
    expect(
      service.getProductList({ filter: ['NEWS', 'REGIONS', 'VIDEO', 'TV'] }),
    ).toStrictEqual(MOCKED_PRODUCT_LIST);
    // No select type
    expect(service.getProductList({})).toStrictEqual(MOCKED_PRODUCT_LIST);
  });

  it('should get a product with News type', () => {
    expect(service.getProductList({ filter: ['NEWS'] })).toStrictEqual([
      MOCKED_PRODUCT_LIST[0],
    ]);
  });

  it('should get a product with `first` search text', () => {
    expect(service.getProductList({ search: 'first' })).toStrictEqual([
      MOCKED_PRODUCT_LIST[0],
    ]);
  });

  it('should get a product with News type and `title` search text', () => {
    expect(
      service.getProductList({ search: 'title', filter: ['NEWS'] }),
    ).toStrictEqual([MOCKED_PRODUCT_LIST[0]]);
  });

  it('should get empty product with `empty` search text', () => {
    expect(service.getProductList({ search: 'empty' })).toStrictEqual([]);
  });
});
