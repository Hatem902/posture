import {
  Button,
  Center,
  Checkbox,
  Heading,
  Input,
  Stack,
  Text,
  InputField,
  InputGroup,
  InputLeftElement,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import { AtSignIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons';
import { object, string } from 'yup';

const login = () => {
  return (
    <Center h='100vh' bg='purple.200'>
      <Stack boxShadow='md' bg='whiteAlpha.900' p='20' rounded='md'>
        <Image
          src='/medicine.png'
          maxW='210px'
          mx='auto'
          rounded='full'
        ></Image>
        <Heading as='h1'>Log in.</Heading>
        <Text fontSize='lg' color='gray.600'>
          Please log in with the data you entered during registration.
        </Text>
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack my='4' spacing='6'>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AtSignIcon color='purple.500' />}
                  />
                  <Input type='tel' placeholder='Type in your Email' />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<LockIcon color='purple.500' />}
                  />
                  <Input type='tel' placeholder='Type in your password' />
                </InputGroup>
                {/* <Input
                  name='email'
                  type='email'
                  label='Email'
                  leftAddon={<AtSignIcon color='purple.500' />}
                ></Input>
                <Input
                  name='password'
                  type='password'
                  label='Password'
                  leftAddon={<LockIcon color='purple.500' />}
                ></Input> */}
                <Checkbox colorScheme='purple'>Keep me logged in</Checkbox>
                <Button
                  isLoading={isSubmitting}
                  loadingText='Whispering to our servers'
                  size='lg'
                  color='whiteAlpha.900'
                  type='submit'
                  bg='purple.500'
                  _hover={{
                    background: 'purple.400',
                    cursor: 'pointer',
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
        <Stack justify='center' color='gray.600' spacing='3'>
          <Text as='div' textAlign='center'>
            <span>Don't have an account? </span>
            <Link href='/signup'>
              <Button colorScheme='purple' variant='link'>
                sign up
              </Button>
            </Link>
          </Text>
          <Button colorScheme='purple' variant='link'>
            Forgot password?
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};

export default login;
