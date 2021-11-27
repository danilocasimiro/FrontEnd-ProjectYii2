import { Flex, Stack, Button, Box, FormLabel, SimpleGrid, Text, Select } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Form/Input';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { useRouter } from 'next/router';
import { api } from '../../../services';
import toast, { Toaster } from 'react-hot-toast';

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  genre: yup.string().required('Gênero obrigatório'),
  birthdate: yup.string().required('Data de nascimento obrigatório'),
  ddd: yup.string().required('DDD obrigatório'),
  phone_number: yup.string().required('Número de telefone obrigatório'),
  address: yup.string().required('Endereço obrigatório'),
  number: yup.string().required('Número obrigatório'),
  district: yup.string().required('Bairro obrigatório'),
  city: yup.string().required('Cidade obrigatório'),
  state: yup.string().required('Estado obrigatório'),
  country: yup.string().required('País obrigatório'),
  zip_code: yup.string().required('CEP obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa ser do mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const router = useRouter()

  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  async function onSubmit(data) {
    const loading = toast.loading('Aguarde....')
    
    await api.post('/auth-users',{ data }).catch( e => {
      toast.remove(loading)
      toast.error('Erro ao criar o usuário!!!')
      }
    ).then(response => {

      toast.remove(loading)
      if(!!response) {
        toast.success('Usuário criado com sucesso!!!')  
        router.push('/site/login')
      }
    })
  }
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
          h="100%"
          maxW={700}
          bg="gray.800"
          p="8"
          borderRadius={10}
          flexDir="column"
          marginLeft="37"
          onSubmit={handleSubmit(onSubmit)}
        >
        {toast}
        <Toaster />
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
                  size="md"
                  error={formState.errors.email}
                  {...register("email")}>
                </Input>
                
              </Box>
              <Box marginTop="8">
                <Input
                  name="password"
                  label="Senha"
                  type="password"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
                  error={formState.errors.password}
                  {...register("password")}>
                </Input>
              </Box>
              <Box marginTop="8">
                <FormLabel htmlFor="password_confirmation">Confirmação senha</FormLabel>
                <Input
                  name="password_confirmation"
                  type="password"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"  
                  error={formState.errors.password_confirmation}
                  {...register("password_confirmation")}>
                </Input>
              </Box>
            </SimpleGrid>
            <SimpleGrid columns={[2, null, 2]} spacingX="50px" spacingY="10px">
              <Box marginTop="1">
                <Text as="i" fontSize="xl" height="10" color="#61dafb">Dados pessoais</Text>
                <FormLabel htmlFor="name">Nome</FormLabel>
              
                <Input
                  name="name"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"   
                  error={formState.errors.name}
                  {...register("name")}>
                </Input>
              </Box>
              <Box marginTop="8">
                <FormLabel htmlFor="sex">Gênero</FormLabel>
              
                <Select placeholder="Selecione"  
                        _hover={{
                        bgColor: 'gray.900'
                        }}
                        error={formState.errors.genre}
                        {...register("genre")}>
                
                  <option value="m">Masculino</option>
                  <option value="f">Feminino</option>
                </Select>
              </Box>
            </SimpleGrid>
            <SimpleGrid columns={[2, null, 3]} spacingX="50px" spacingY="10px">
              <Box>
                <FormLabel htmlFor="birthdate">Data de nascimento</FormLabel>
              
                <Input
                  name="birthdate"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
                  error={formState.errors.birthdate}
                  {...register("birthdate")}>
                </Input>
              </Box>
              <Box>
                <FormLabel htmlFor="ddd">DDD</FormLabel>
              
                <Input
                  name="ddd"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
                  error={formState.errors.ddd}
                  {...register("ddd")}>
                </Input>
              </Box>
              <Box>
                <FormLabel htmlFor="phone_number">Telefone</FormLabel>
              
                <Input
                  name="phone_number"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
                  error={formState.errors.phone_number}
                  {...register("phone_number")}>
                </Input>
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
                  error={formState.errors.address}
                  {...register("address")}>
                </Input>
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
                  error={formState.errors.number}
                  {...register("number")}>
                </Input>
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
                  error={formState.errors.district}
                  {...register("district")}>
                </Input>
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
                  size="md"
                  error={formState.errors.city}
                  {...register("city")}>
                </Input>
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
                  size="md"
                  error={formState.errors.state}
                  {...register("state")}>
                </Input>
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
                  size="md"
                  error={formState.errors.country}
                  {...register("country")}>
                </Input>
              </Box>
              <Box marginTop="5">
                <FormLabel htmlFor="cep">CEP</FormLabel>
              
                <Input
                  name="zip_code"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="sm"
                  error={formState.errors.zip_code}
                  {...register("zip_code")}>
                </Input>
              </Box>
            </SimpleGrid>
          </Stack>
          <Button
            type="submit"
            mt="6"
            colorScheme="blue"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Criar conta
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
