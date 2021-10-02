import { Flex, Box, Stack, SimpleGrid, Text, Input, FormLabel, Button, Image, Center } from "@chakra-ui/react";
import { HeaderSystem } from "../../../components/HeaderSystem";
import { SideBar } from "../../../components/SideBar";
import { SearchIcon, Icon  } from '@chakra-ui/icons'
import { SiFacebook, SiInstagram, SiTwitter, SiGithub, SiWebmoney } from "react-icons/si";

export default function Dashboard() {
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
            <Button bg="#61dafb" margin="auto" marginTop="2" color="#373d4b" marginLeft="40%">Alterar imagem</Button>
            <Text as="em" align="center" fontSize="xl">José maria</Text>
            <Text as="em" align="center" fontSize="md">Tipo de conta: Administrador</Text>
            <Text as="em" align="center" fontSize="md">Travessa Miranda e Castro, 487 Santana Porto Alegre/RS</Text>
            </Stack>
          <Button bg="#dd211a" margin="auto" marginTop="2" marginBottom="4" marginLeft="40%">Deletar conta</Button>
        </Box>
        <Box bg="#373d4b" borderRadius="lg">
          <SimpleGrid columns={1} spacing={4} marginTop="3" marginLeft="15%" >
            <Flex>
              <Text as="em" align="center" fontSize="2xl">Dados pessoais</Text>
            </Flex>
            <Text as="em" align="center" fontSize="lg"></Text>
            <Flex>
              <Text as="u" align="center" fontSize="lg">Nome completo: </Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2"> Danilo gonçalves casimiro</Text>
            </Flex>
            <Flex>
              <Text as="u" align="center" fontSize="lg">E-mail:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">dan_casimiro@hotmail.com</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">Telefone:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">(43)3348-8756</Text>
            </Flex>
            
            <Flex>
              <Text as="u" align="center" fontSize="lg">Gênero:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">Masculino</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">Data de nascimento:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">15/08/1992</Text>
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
              <Text as="em" align="center" fontSize="lg" marginLeft="2"> Travessa Miranda e Castro</Text>
            </Flex>
            <Flex>
              <Text as="u" align="center" fontSize="lg">Número:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">487</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">Bairro:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">Santana</Text>
            </Flex>
            
            <Flex>
              <Text as="u" align="center" fontSize="lg">Cidade:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">Porto Alegre</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">Estado:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">RS</Text>
            </Flex>
            
            <Flex>
              <Text as="u" align="center" fontSize="lg">País:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">BR</Text>
            </Flex>
           
            <Flex>
              <Text as="u" align="center" fontSize="lg">CEP:</Text>
              <Text as="em" align="center" fontSize="lg" marginLeft="2">90040-280</Text>
            </Flex>
           

          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </>
  )
}