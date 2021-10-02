import { Flex, Box, Stack, SimpleGrid, Text, Input, FormLabel, Button, Image, Center } from "@chakra-ui/react";

import { HeaderSystem } from "../../../components/HeaderSystem";
import { SideBar } from "../../../components/SideBar";

export default function Companies() {
  return (
    <>
      <HeaderSystem />
      <SideBar/>
      <Flex
          as="form"
          w="100vw"
          h="100%"
          marginTop="5"
          maxW={1300}
          bg="gray.800"
          p="8"
          borderRadius={10}
          flexDir="column"
          marginLeft="37"
        >
          <Stack spacing="4">
            <SimpleGrid columns={[2, null, 3]} spacingX="50px">
              <Box>
                <Text as="i" fontSize="xl" color="#61dafb">Dados de acesso</Text>
                <FormLabel htmlFor="email">E-mail</FormLabel>
              
                <Input
                  name="email"
                  type="email"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
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
                  size="md"
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
                  size="md"
                />
              </Box>
              </SimpleGrid>
              <SimpleGrid columns={[2, null, 2]} spacingX="50px" spacingY="10px">
                <Box marginTop="3">
                  <Text as="i" fontSize="xl" height="10" color="#61dafb">Dados da empresa</Text>
                  <FormLabel htmlFor="name">Nome Fantasia</FormLabel>
                
                  <Input
                    name="name"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                  />
                </Box>
                <Box marginTop="10">
                  <FormLabel htmlFor="sex">CNPJ</FormLabel>
                
                  <Input
                    name="sex"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                  />
                </Box>
              </SimpleGrid>
              <SimpleGrid columns={[2, null, 3]} spacingX="50px">
                <Box>
                  <FormLabel htmlFor="birthdate">Data de Fundação</FormLabel>
                
                  <Input
                    name="birthdate"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="birthdate">DDD</FormLabel>
                
                  <Input
                    name="birthdate"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="birthdate">Número de telefone</FormLabel>
                
                  <Input
                    name="birthdate"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                  />
                </Box>
              </SimpleGrid>
              <SimpleGrid columns={[2, null, 3]} spacingX="50px" spacingY="10px">
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
                  size="md"
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
                  size="md"
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
                  size="md"
                />
              </Box>
            </SimpleGrid>
            <SimpleGrid columns={[2, null, 4]} spacingX="50px" spacingY="10px">
              <Box>
                <FormLabel htmlFor="city">Cidade</FormLabel>
              
                <Input
                  name="city"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="state">Estado</FormLabel>
              
                <Input
                  name="state"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="country">País</FormLabel>
              
                <Input
                  name="country"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="cep">CEP</FormLabel>
              
                <Input
                  name="cep"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
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
    </>
  )
}