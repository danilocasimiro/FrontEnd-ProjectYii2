import { Flex, Stack, Input, Button, Box, FormLabel, FormControl } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../../../components/Header';

export default function Login() {
  return (
    <>
      <Header />
      <Head>
        <title>Home | Your research</title>
      </Head>
      <Flex w="90vw" h="89vh" align="center" justify="right">
        <Stack spacing={4}>
          <Box position="static">
            <Box fontSize="50" padding="4" align="center">
              Welcome back
            </Box>
            <Box align="center" padding="6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum ad taciti, egestas fames vulputate proin sodales quisque condimentum faucibus eros vestibulum consequat aenean morbi tincidunt mauris. Augue dictumst malesuada sollicitudin erat habitant vestibulum torquent maximus, egestas pharetra eu parturient velit ligula ante dis, aenean per ullamcorper aliquet suspendisse integer nec. Venenatis volutpat cras eleifend nisl nec, fusce vivamus senectus nascetur justo cras aptent curabitur penatibus, etiam habitant proin vitae pretium sodales nibh eu. Litora tortor pellentesque senectus ultricies mus .
            </Box>
          </Box>
        </Stack>
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
        
        >
          <Stack spacing="4">
            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
            
              <Input
                name="email"
                type="email"
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Password</FormLabel>
              <Input
                name="password"
                label="Senha"
                type="password"
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
                size="lg"
              />
            </FormControl>
          </Stack>
          <Button
            type="submit"
            mt="6"
            colorScheme="blue"
            size="lg"
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}