import { styled, Box, Typography } from '@mui/material';
import { Product } from '../../Domains/Product';
import { getFullDate } from '../../Utils/formatDate';

interface ProductCardProps {
  product: Product;
}

const Card = styled(Box)`
  border: 1px solid #ccc;
  padding: 16px 8px;
`;

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <Typography mb={2} variant={'h5'} color={'primary'} component={'h2'}>
        {product.productTitle}
      </Typography>
      <img width={'100%'} src={product.productImage} />
      <Typography mt={1} variant={'body1'}>
        {product.productDetail}
      </Typography>
      <Typography mt={1} variant={'body2'} color={'grey'}>
        Updated: {getFullDate(product.updatedAt)}
      </Typography>
    </Card>
  );
};

export default ProductCard;
