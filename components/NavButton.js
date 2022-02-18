import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
const NavButton = ({ name }) => {
  return (
    <NextLink href='/' passHref>
      <Button as='a' variant='ghost' aria-label='Home'>
        {name}
      </Button>
    </NextLink>
  );
};

export default NavButton;
