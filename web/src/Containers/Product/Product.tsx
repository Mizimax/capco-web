import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { ProductType } from '../../Domains/Product';
import Navbar from '../../Components/Navbar';
import ProductTypeSelector from '../../Components/ProductTypeSelector';
import Flex from '../../Components/Base/Flex';

const ProductContainer = () => {
  const [search, setSearch] = useState<string>();
  const [type, setType] = useState<ProductType>(ProductType.News);

  const handleOnSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleOnTypeChange = (type: ProductType) => {
    setType(type);
  };

  return (
    <Box>
      <Navbar>
        <Flex bgcolor={'primary.dark'}>
          <ProductTypeSelector type={type} onTypeChange={handleOnTypeChange} />
          <Box width={300} bgcolor={'primary.main'} borderRadius={'16px'} px={2} mx={2}>
            <TextField
              sx={{ width: '100%' }}
              value={search}
              onChange={(e) => handleOnSearchChange(e.target.value)}
              placeholder={'Search'}
            />
          </Box>
        </Flex>
      </Navbar>
    </Box>
  );
};

export default ProductContainer;
