import { Box, styled, Typography } from '@mui/material';
import { ProductType } from '../../Domains/Product';
import Flex from '../Base/Flex';

const NavItem = styled(Flex)`
  width: 100%;
  min-width: 100px;
  height: 56px;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;

type ProductTypeSelector = {
  type?: ProductType;
  onTypeChange: (types: ProductType[]) => void;
};

const ProductTypeSelector = ({ types = [ProductType.News], onTypeChange }) => {
  const handleSelectType = (type: ProductType) => {
    onTypeChange(type);
  };

  return (
    <Flex alignItems={'center'} gap={1}>
      <NavItem
        bgcolor={types.includes(ProductType.News) ? 'primary.main' : ''}
        onClick={() => handleSelectType(ProductType.News)}
      >
        <Typography variant="subtitle1">News</Typography>
      </NavItem>
      <NavItem
        bgcolor={types.includes(ProductType.Regions) ? 'primary.main' : ''}
        onClick={() => handleSelectType(ProductType.Regions)}
      >
        <Typography variant="subtitle1">Regions</Typography>
      </NavItem>
      <NavItem
        bgcolor={types.includes(ProductType.Video) ? 'primary.main' : ''}
        onClick={() => handleSelectType(ProductType.Video)}
      >
        <Typography variant="subtitle1">Video</Typography>
      </NavItem>
      <NavItem
        bgcolor={types.includes(ProductType.TV) ? 'primary.main' : ''}
        onClick={() => handleSelectType(ProductType.TV)}
      >
        <Typography variant="subtitle1">TV</Typography>
      </NavItem>
    </Flex>
  );
};

export default ProductTypeSelector;
