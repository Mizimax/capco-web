export enum ProductType {
  News = 'NEWS',
  Regions = 'REGIONS',
  Video = 'VIDEO',
  TV = 'TV',
}

export type Product = {
  productId: string;
  productTitle: string;
  productImage: string;
  productDetail: string;
  productType: ProductType;
  createdAt: string;
  updatedAt: string;
};

export type ProductListProps = {
  search: string;
  filter: ProductType[];
};
