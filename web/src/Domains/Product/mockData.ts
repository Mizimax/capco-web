import { Product, ProductType } from './types';
import productImage from '../../assets/capco.png';

export const mockProductList: Product[] = [
  {
    productId: '555',
    productTitle: 'Title',
    productImage: productImage,
    productDetail: `may Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    productType: ProductType.News,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: '555',
    productTitle: 'Title',
    productImage: productImage,
    productDetail: `may Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    productType: ProductType.News,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: '555',
    productTitle: 'Title',
    productImage: productImage,
    productDetail: `may Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    productType: ProductType.News,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: '555',
    productTitle: 'Title',
    productImage: productImage,
    productDetail: `may Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    productType: ProductType.News,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
