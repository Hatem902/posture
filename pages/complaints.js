import { Flex, Stack } from '@chakra-ui/react';
import Complaints from '../components/complaints/Complaints';
const complaints = () => {
  return (
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

      <Complaints />
    </Stack>
  );
};

export default complaints;
