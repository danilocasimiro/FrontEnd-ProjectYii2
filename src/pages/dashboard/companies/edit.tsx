import { Flex, Box, Stack, SimpleGrid, Text, Input, FormLabel, Button, Image, Center } from "@chakra-ui/react";
import { useSession, getSession } from "next-auth/client";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";

import { HeaderSystem } from "../../../components/HeaderSystem";
import { SideBar } from "../../../components/SideBar";
import { api } from "../../../services";

interface ServerProps {
  id: string
}

export default function EditCompany({ id }: ServerProps) {
  const [ session, loading ] = useSession()
  const [currentUser, setCurrentUser] = useState()
  const profileId = id ? id : session.user.id
  const [cookies, setCookie] = useCookies();

  useEffect( () => {
    api.get(`/profile/${profileId}`, {
      headers: {
        Authorization: `Bearer ${cookies.next_auth_token}`
      }
    }).then((response) => {
      setCurrentUser(response.data);

    }).catch((e) => { console.log(e)})
    
  }, []);

  async function handleSubmit(data) {
  console.log(data)
  data.preventDefault();
  
  }
  return (
    <>
      <HeaderSystem />
      <SideBar/>
      <Stack spacing={3} marginTop="5">
        <Text as="em" fontSize="2xl" height="10" borderRadius="10" color="#61dafb" bg="#373d4b">Editar Empresa</Text>
      </Stack>
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
          onSubmit={handleSubmit}
        >
          <Stack spacing="4">
            <SimpleGrid columns={[2, null, 3]} spacingX="50px">
              <Box>
                <Text as="i" fontSize="xl" color="#61dafb">Dados de acesso</Text>
                <FormLabel htmlFor="email">E-mail</FormLabel>
              
                <Input
                  name="email"
                  type="email"
                  value={currentUser?.email}
                  bg='gray.900'
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.600'
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
                    bg='gray.900'
                    value={currentUser?.person.name}
                    _hover={{
                      bgColor: 'gray.600'
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
                    bg='gray.900'
                    value={currentUser?.person.cnpj}
                    _hover={{
                      bgColor: 'gray.600'
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
                    bg='gray.900'
                    value={currentUser?.person.foundation}
                    _hover={{
                      bgColor: 'gray.600'
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
                    bg='gray.900'
                    value={currentUser?.phone.ddd}
                    _hover={{
                      bgColor: 'gray.600'
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
                    bg='gray.900'
                    value={currentUser?.phone.number}
                    _hover={{
                      bgColor: 'gray.600'
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
                  bg='gray.900'
                  value={currentUser?.address.street}
                  _hover={{
                    bgColor: 'gray.600'
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
                  bg='gray.900'
                  value={currentUser?.address.number}
                  _hover={{
                    bgColor: 'gray.600'
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
                  bg='gray.900'
                  value={currentUser?.address.district}
                  _hover={{
                    bgColor: 'gray.600'
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
                  bg='gray.900'
                  value={currentUser?.address.city}
                  _hover={{
                    bgColor: 'gray.600'
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
                  bg='gray.900'
                  value={currentUser?.address.state}
                  _hover={{
                    bgColor: 'gray.600'
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
                  bg='gray.900'
                  value={currentUser?.address.country}
                  _hover={{
                    bgColor: 'gray.600'
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
                  bg='gray.900'
                  value={currentUser?.address.zipcode}
                  _hover={{
                    bgColor: 'gray.600'
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
            Editar dados
          </Button>
        </Flex>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id ? ctx.query.id : null
  return {
    props: {
      session: await getSession(ctx),
      id
    }
  }
}
