import { Flex, Stack } from '@chakra-ui/layout';
import Nav from './Nav';
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 3rem auto'
        maxWidth='800px'
        px={4}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='800px'
          w='100%'
        ></Flex>
        {children}
      </Stack>
    </>
  );
};

export default Layout;
