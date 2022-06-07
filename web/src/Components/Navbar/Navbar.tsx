import { Typography } from '@mui/material';
import Flex from '../Base/Flex';

const Navbar = ({ children }) => {
  return (
    <Flex p={1} justifyContent={'space-between'} alignItems={'center'}>
      <Typography variant={'h5'} component={'h1'}>
        Capco Product
      </Typography>
      {children}
    </Flex>
  );
};

export default Navbar;
