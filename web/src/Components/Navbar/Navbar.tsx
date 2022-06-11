import { Typography } from '@mui/material';
import Flex from '../Base/Flex';

const Navbar = ({ children }) => {
  return (
    <Flex
      flexDirection={{ xs: 'column', lg: 'row' }}
      justifyContent={{ xs: 'center', lg: 'space-between' }}
      alignItems={'center'}
    >
      <Typography ml={2} variant={'h5'} component={'h1'}>
        Capco Product
      </Typography>
      {children}
    </Flex>
  );
};

export default Navbar;
