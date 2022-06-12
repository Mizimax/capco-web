/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import ProductCard from '.';
import { Product, ProductType } from '../../Domains/Product';
import '@testing-library/jest-dom';

const mockedProduct: Product = {
  productId: 'a05d845b-8b17-4a08-a8ff-5dba6790f56d',
  productTitle: 'Third Title',
  productImage:
    'https://user-images.githubusercontent.com/24763308/173191954-5499f451-a6d6-445a-adba-48932ba0e028.png',
  productDetail:
    "may Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  productType: ProductType.Video,
  createdAt: 'Sat Jun 11 2022',
  updatedAt: 'Sat Jun 11 2022',
};

describe('useProductList', () => {
  test('it should get all product items', async () => {
    render(<ProductCard product={mockedProduct} />);
    const titleText = screen.getByText(/Third Title/i);
    const coverImage = screen.getByAltText(/cover image/i);
    const descriptionText = screen.getByText(/may Lorem/i);
    const updatedDate = screen.getByText(/Updated: June 11, 2022, 24:00/i);
    expect(titleText).toBeInTheDocument();
    expect(coverImage).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
    expect(updatedDate).toBeInTheDocument();
  });
});
