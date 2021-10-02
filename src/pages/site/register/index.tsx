import { Flex, Stack, Input, Button, Box, FormLabel, SimpleGrid, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../../../components/Header';

export default function Login() {
  return (
    <>
      <Header />
      <Head>
        <title>Home | Your research</title>
      </Head>
      <Flex w="100vw" h="89vh" align="center">
        <Stack spacing={4}>
          <Box position="static" w="50vw">
            <Box fontSize="50" align="center">
              Welcome
            </Box>
            <Box align="center" py="20">
              Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum ad taciti, egestas fames vulputate proin sodales quisque condimentum faucibus eros vestibulum consequat aenean morbi tincidunt mauris. Augue dictumst malesuada sollicitudin erat habitant vestibulum torquent maximus, egestas pharetra eu parturient velit ligula ante dis, aenean per ullamcorper aliquet suspendisse integer nec. Venenatis volutpat cras eleifend nisl nec, fusce vivamus senectus nascetur justo cras aptent curabitur penatibus, etiam habitant proin vitae pretium sodales nibh eu. Litora tortor pellentesque senectus ultricies mus .
            </Box>
          </Box>
        </Stack>
        <Flex
          as="form"
          w="100%"
          h="95%"
          maxW={700}
          bg="gray.800"
          p="8"
          borderRadius={10}
          flexDir="column"
          marginLeft="37"
        >
          <Stack spacing="4">
            <SimpleGrid columns={[2, null, 3]} spacingX="50px" spacingY="10px">
              <Box>
                <Text as="i" fontSize="xl" height="10" color="#61dafb">Dados de acesso</Text>
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
              </Box>
              <Box marginTop="8">
                <FormLabel htmlFor="email">Senha</FormLabel>
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
              </Box>
              <Box marginTop="8">
                <FormLabel htmlFor="email_confirmation">Confirmação senha</FormLabel>
                <Input
                  name="password_confirmation"
                  label="Senha"
                  type="password"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="3">
                <Text as="i" fontSize="xl" height="10" color="#61dafb">Dados pessoais</Text>
                <FormLabel htmlFor="name">Nome</FormLabel>
              
                <Input
                  name="name"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="10">
                <FormLabel htmlFor="sex">Gênero</FormLabel>
              
                <Input
                  name="sex"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="10">
                <FormLabel htmlFor="birthdate">Data de nascimento</FormLabel>
              
                <Input
                  name="birthdate"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="5">
                <Text as="i" fontSize="xl" height="10" color="#61dafb">Dados de endereço</Text>
                <FormLabel htmlFor="address">Endereço</FormLabel>
              
                <Input
                  name="address"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="12">
                <FormLabel htmlFor="number">Número</FormLabel>
              
                <Input
                  name="number"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="12">
                <FormLabel htmlFor="district">Bairro</FormLabel>
              
                <Input
                  name="district"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
            </SimpleGrid>
            <SimpleGrid columns={[2, null, 4]} spacingX="50px" spacingY="10px">
              <Box marginTop="5">
                <FormLabel htmlFor="city">Cidade</FormLabel>
              
                <Input
                  name="city"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="5">
                <FormLabel htmlFor="state">Estado</FormLabel>
              
                <Input
                  name="state"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="5">
                <FormLabel htmlFor="country">País</FormLabel>
              
                <Input
                  name="country"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
              <Box marginTop="5">
                <FormLabel htmlFor="cep">CEP</FormLabel>
              
                <Input
                  name="cep"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                />
              </Box>
            </SimpleGrid>
          </Stack>
          <Button
            type="submit"
            mt="6"
            colorScheme="blue"
            size="lg"
          >
            Criar conta
          </Button>
        </Flex>
      </Flex>
    </>
  );
}