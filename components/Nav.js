import { HamburgerIcon } from '@chakra-ui/icons';
import { Center, Flex, IconButton } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import NavButton from './NavButton';
import { useState } from 'react';

const Nav = () => {
  const [display, changeDisplay] = useState('none');
  const toggleDisplay = () =>
    changeDisplay(display === 'none' ? 'flex' : 'none');
  return (
    <Center>
      <Flex my={5}>
        <Flex flexDir='column' display={[display, display, 'none', 'none']}>
          <NavButton name='Profile' />
          <NavButton name='Home' />
          <NavButton name='Appointments' />
        </Flex>
        <IconButton
          aria-label='Open Hamburger Navigation Menu'
          mr={2}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={toggleDisplay}
        />
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <NavButton name='Profile' />
          <NavButton name='Home' />
          <NavButton name='Appointments' />
        </Flex>

        <ColorModeSwitch />
      </Flex>
    </Center>
  );
};

export default Nav;
