import { Grid, GridItem, Text } from '@chakra-ui/react';

const Complaint = ({ complaint }) => {
  return (
    <Grid
      px={4}
      fontSize='xs'
      fontWeight='semibold'
      letterSpacing={0.6}
      alignItems='center'
      templateColumns='repeat(60, 1fr)'
      w='full'
      transition='ease-out'
      transitionProperty='background'
      transitionDuration='normal'
      borderRadius='lg'
      /* py={{ base: 2, '2xl': 2 }} */
      py={2}
      color='whiteAlpha.900'
      _hover={{
        background: 'gray.dark',
        cursor: 'pointer',
      }}
    >
      <GridItem colSpan={['16', '16', '14', '14']} maxW='50%'>
        <Text isTruncated>{complaint.title}</Text>
      </GridItem>
      <GridItem colSpan={['25', '25', '26', '26']} maxW='50%'>
        <Text isTruncated>{complaint.description}</Text>
      </GridItem>
      <GridItem colSpan={12} maxW='80%'>
        <Text isTruncated>{complaint.complainer}</Text>
      </GridItem>

      <GridItem
        colSpan={7}
        maxW='50%'
        display={['none', 'none', 'flex', 'flex']}
      >
        <Text isTruncated>{complaint.time}</Text>
      </GridItem>
      <GridItem colStart={60} colEnd={60}>
        <Text>{complaint.solved}</Text>
      </GridItem>
    </Grid>
  );
};

export default Complaint;
