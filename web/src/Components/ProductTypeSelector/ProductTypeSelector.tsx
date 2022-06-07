import { Box, styled, Typography } from '@mui/material';
import { ProductType } from '../../Domains/Product';
import Flex from '../Base/Flex';

const NavItem = styled(Box)`
  padding: 14px 32px;
  color: white;
  cursor: pointer;
`;

type ProductTypeSelector = {
  type?: ProductType;
  onTypeChange: (type: ProductType) => void;
};

const ProductTypeSelector = ({ type = ProductType.News, onTypeChange }) => {
  const handleSelectType = (type: ProductType) => {
    onTypeChange(type);
  };

  return (
    <Flex alignItems={'center'} gap={1}>
      <NavItem
        bgcolor={type === ProductType.News ? 'primary.main' : ''}
        onClick={() => handleSelectType(ProductType.News)}
      >
        <Typography variant="subtitle1">News</Typography>
      </NavItem>
      <NavItem
        bgcolor={type === ProductType.Regions ? 'primary.main' : ''}
        onClick={() => handleSelectType(ProductType.Regions)}
      >
        <Typography variant="subtitle1">Regions</Typography>
      </NavItem>
      <NavItem
        bgcolor={type === ProductType.Video ? 'primary.main' : ''}
        onClick={() => handleSelectType(ProductType.Video)}
      >
        <Typography variant="subtitle1">Video</Typography>
      </NavItem>
      <NavItem
        bgcolor={type === ProductType.TV ? 'primary.main' : ''}
        onClick={() => handleSelectType(ProductType.TV)}
      >
        <Typography variant="subtitle1">TV</Typography>
      </NavItem>
    </Flex>
  );
};

export default ProductTypeSelector;
