import { Center, Flex } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import NavButton from './NavButton';

const Nav = () => {
  return (
    <Center>
      <Flex my={5}>
        <NavButton name='Profile' />
        <NavButton name='Home' />
        <NavButton name='Appointments' />
        <ColorModeSwitch />
      </Flex>
    </Center>
  );
};

export default Nav;
