import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Center,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import NavButton from './NavButton';

const Nav = () => {
  return (
    <Center>
      <Flex my={5}>
        <Flex display={['flex', 'flex', 'none', 'none']}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Open Hamburger Navigation Menu'
              icon={<HamburgerIcon />}
              variant='outline'
              mr={2}
            />
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Home</MenuItem>
              <MenuItem>Appointments</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
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
