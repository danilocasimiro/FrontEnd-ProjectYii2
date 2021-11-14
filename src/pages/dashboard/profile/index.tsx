import { Flex, Box, Stack, SimpleGrid, Text, Input, FormLabel, Button, Image, Center } from "@chakra-ui/react";
import { HeaderSystem } from "../../../components/HeaderSystem";
import { SideBar } from "../../../components/SideBar";
import { Icon  } from '@chakra-ui/icons'
import { SiFacebook, SiInstagram, SiTwitter, SiGithub, SiWebmoney } from "react-icons/si";
import { api } from "../../../services";
import { getSession, useSession } from "next-auth/client";
import { useState, useEffect } from "react";

type Object = {
  name: string,
  id: string
}

export default function Dashboard() {
  const [ session, loading ] = useSession()
  const [currentUser, setCurrentUser] = useState()
  //api.get(`/auth-users/profile/${session.token.sub}`).then(result => console.log(result)).catch(e => (e))
  
  useEffect(async () => {
    const result = await api.get(`/auth-users/profile/${session.token.sub}`);
 
    setCurrentUser(result.data);
  }, [session]);
  console.log(currentUser)

  if (loading) {
    return <p>Loading…</p>
  }
  if (!loading && !session) {
    return <p>You must be signed in to view this page</p>
  }
  return (
    <>
      <HeaderSystem />
      <SideBar/>
      <Stack spacing={3} marginTop="5">
        <Text as="em" fontSize="2xl" height="10" borderRadius="10" color="#61dafb" bg="#373d4b">Dashboard/Profile</Text>
      </Stack>
      <SimpleGrid columns={2} spacing={10} marginTop="1" >
        <Box bg="#373d4b" borderRadius="lg" >
          <Stack marginTop="5">
            <Center>
              <Image src="/images/transferir.png" alt="ig.news" borderRadius="2xl" w="20" />
            </Center>
          </Stack>
          
          <Stack >
            <Button bg="#61dafb" margin="auto" marginTop="2" color="#373d4b" marginLeft="42%">Alterar imagem</Button>
            <Text as="em" align="center" fontSize="xl">{currentUser?.person.name}</Text>
            <Text as="em" align="center" fontSize="md">{currentUser?.userType.type}</Text>
            <Text as="em" align="center" fontSize="md">{currentUser?.address.street}, {currentUser?.address.number} {currentUser?.address.district} {currentUser?.address.city}/{currentUser?.address.state}</Text>
            </Stack>
          <Button bg="#dd211a" margin="auto" marginTop="2" marginBottom="4" marginLeft="43%">Deletar conta</Button>
        </Box>
        <Box bg="#373d4b" borderRadius="lg">
          <SimpleGrid columns={1} spacing={4} marginTop="3" marginLeft="15%" >
            <Flex>
              <Text as="em" align="center" fontSize="2xl">Dados pessoais</Text>
            </Flex>
            <Text as="em" align="center" fontSize="lg"></Text>
            <Flex>
              <Text as="u" align="center" fontSize="lg">Nome completo: {currentUser?.person.name}</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2"> </Text>
            </Flex>
            <Flex>
              <Text as="u" align="center" fontSize="lg">E-mail: {currentUser?.user.email}</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2"></Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">Telefone:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">({currentUser?.phone.ddd}) {currentUser?.phone.number}</Text>
            </Flex>
            
            <Flex>
              <Text as="u" align="center" fontSize="lg">Gênero:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">{currentUser?.person.sex === 'M' ? 'Masculino' : 'Feminino'}</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">Data de nascimento:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">{currentUser?.person.birthday}</Text>
            </Flex>
          </SimpleGrid>
        </Box>
        <Box bg="#373d4b" borderRadius="lg" >
          <SimpleGrid columns={2} spacing={4} marginTop="4" marginLeft="10%" >
            <Flex>
              <Icon as={SiWebmoney} fontSize="20" marginRight="2"/>
              <Text as="u" align="center" fontSize="lg">Website</Text>
            </Flex>
            <Text as="em" align="center" fontSize="lg">http://bootdey.com</Text>
            <Flex>
              <Icon as={SiGithub} fontSize="20" marginRight="2"/>
              <Text as="u" align="center" fontSize="lg">Github</Text>
            </Flex>
            <Text as="em" align="center" fontSize="lg">danilocasimiro32</Text>
            <Flex>
              <Icon as={SiTwitter} fontSize="20" marginRight="2"/>
              <Text as="u" align="center" fontSize="lg">Twitter</Text>
            </Flex>
            <Text as="em" align="center" fontSize="lg">@dancasimiro</Text>
            <Flex>
              <Icon as={SiInstagram} fontSize="20" marginRight="2"/>
              <Text as="u" align="center" fontSize="lg">Instagram</Text>
            </Flex>
            <Text as="em" align="center" fontSize="lg">@danilocasimiro</Text>
            <Flex>
              <Icon as={SiFacebook} fontSize="20" marginRight="2"/>
              <Text as="u" align="center" fontSize="lg">facebook</Text>
            </Flex>
            <Text as="em" align="center" fontSize="lg">http://facebook.com/danilocasimiro</Text>
          </SimpleGrid>
        </Box>
        <Box bg="#373d4b" borderRadius="lg">
          <SimpleGrid columns={2} spacing={4} marginTop="3" marginLeft="15%" >
            <Flex>
              <Text as="em" align="center" fontSize="2xl">Endereço</Text>
            </Flex>
            <Text as="em" align="center" fontSize="lg"></Text>
            <Flex>
              <Text as="u" align="center" fontSize="lg">Rua: </Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2"> {currentUser?.address.street}</Text>
            </Flex>
            <Flex>
              <Text as="u" align="center" fontSize="lg">Número:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">{currentUser?.address.number}</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">Bairro:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">{currentUser?.address.district}</Text>
            </Flex>
            
            <Flex>
              <Text as="u" align="center" fontSize="lg">Cidade:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">{currentUser?.address.city}</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">Estado:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">{currentUser?.address.state}</Text>
            </Flex>
            
            <Flex>
              <Text as="u" align="center" fontSize="lg">País:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">{currentUser?.address.country}</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">CEP:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">{currentUser?.address.zipcode}</Text>
            </Flex>
           

          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}