import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Complaint from './complaint';
import { complaintsData } from './complaintsData';

const Complaints = () => {
  const HeaderCell = ({ value }) => (
    <Heading
      fontSize='xs'
      fontWeight='semibold'
      letterSpacing={0.3}
      isTruncated
      textTransform='none'
      color='gray.light'
    >
      {value}
    </Heading>
  );
  return (
    <Flex
      w='full'
      flex={1}
      flexDir='column'
      spacing={0}
      align='flex-start'
      height='full'
      mx='3.8rem'
    >
      <Grid
        px={4}
        minW='full'
        /* py={{ base: 3, '2xl': 3 }} */
        py={3}
        alignItems='center'
        templateColumns='repeat(60, 1fr)'
        w='full'
      >
        <GridItem colSpan={['16', '16', '14', '14']} maxW='50%'>
          <HeaderCell value='Title' />
        </GridItem>
        <GridItem colSpan={['25', '25', '26', '26']} maxW='50%'>
          <HeaderCell value='Description' />
        </GridItem>
        <GridItem colSpan={12} maxW='80%'>
          <HeaderCell value='Complainer' />
        </GridItem>
        <GridItem
          colSpan={7}
          maxW='50%'
          display={['none', 'none', 'flex', 'flex']}
        >
          <HeaderCell value='Time' />
        </GridItem>
        <GridItem colStart={60} colEnd={60}>
          <HeaderCell value='Solved' />
        </GridItem>
      </Grid>
      <Box overflowY='auto'>
        {complaintsData.map((complaint) => (
          <Complaint key={complaint.date} complaint={complaint} />
        ))}
      </Box>
    </Flex>
  );
};

export default Complaints;
