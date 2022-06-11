import { useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import useProductList, { Product, ProductType } from '../../Domains/Product';
import Navbar from '../../Components/Navbar';
import ProductTypeSelector from '../../Components/ProductTypeSelector';
import Flex from '../../Components/Base/Flex';
import ProductCard from '../../Components/ProductCard/ProductCard';

const ProductContainer = () => {
  const [search, setSearch] = useState<string>();
  const [type, setType] = useState<ProductType>(ProductType.News);
  const productList = useProductList({ search, filter: type });

  const handleOnSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleOnTypeChange = (type: ProductType) => {
    setType(type);
  };

  return (
    <Box>
      <Navbar>
        <Flex
          width={{ xs: '100%', md: 'auto' }}
          bgcolor={'primary.dark'}
          justifyContent={'space-between'}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <ProductTypeSelector type={type} onTypeChange={handleOnTypeChange} />
          <Box bgcolor={'primary.main'} borderRadius={'16px'} textAlign={'center'} px={2} mx={2}>
            <TextField
              sx={{ minWidth: '300px', width: '100%' }}
              value={search}
              onChange={(e) => handleOnSearchChange(e.target.value)}
              placeholder={'Search'}
            />
          </Box>
        </Flex>
      </Navbar>
      <Grid
        p={2}
        display={'grid'}
        gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, auto)', md: 'repeat(3, auto)' }}
        rowGap={4}
        columnGap={4}
      >
        {productList.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductContainer;