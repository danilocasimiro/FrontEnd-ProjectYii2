import { Flex, Box, SimpleGrid, Text, FormLabel, Button } from "@chakra-ui/react";

import { HeaderSystem } from "../../../components/HeaderSystem";
import { SideBar } from "../../../components/SideBar";
import * as yup from 'yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'; 
import { Input } from '../../../components/Form/Input'

type CreateUserFormData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
}

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

export default function CreateUsers() {
  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {
    console.log(values)
  }

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
           <Box as="form" onSubmit={handleSubmit(handleCreateUser)}>
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
                  error={formState.errors.email}
                  {...register('email')}>
                </Input>
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
                  error={formState.errors.password}
                  {...register('password')}>
                </Input>
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
                  error={formState.errors.password_confirmation}
                  {...register('password_confirmation')}>
                </Input>
              </Box>
              </SimpleGrid>
              <SimpleGrid columns={[2, null, 2]} spacingX="50px" spacingY="10px">
                <Box marginTop="3">
                  <Text as="i" fontSize="xl" height="10" color="#61dafb">Dados pessoais</Text>
                  <FormLabel htmlFor="name">Nome Fantasia</FormLabel>
                
                  <Input
                    name="name"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                    error={formState.errors.name}
                    {...register('name')}>
                  </Input>
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
                    size="md"
                    error={formState.errors.genre}
                    {...register('genre')}>
                  </Input>
                </Box>
              </SimpleGrid>
              <SimpleGrid columns={[2, null, 3]} spacingX="50px">
                <Box>
                  <FormLabel htmlFor="birthdate">Data de Nascimento</FormLabel>
                
                  <Input
                    name="birthdate"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                    error={formState.errors.birthdate}
                    {...register('birthdate')}>
                  </Input>
                </Box>
                <Box>
                  <FormLabel htmlFor="birthdate">DDD</FormLabel>
                
                  <Input
                    name="ddd"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                    error={formState.errors.ddd}
                    {...register('ddd')}>
                  </Input>
                </Box>
                <Box>
                  <FormLabel htmlFor="birthdate">Número de telefone</FormLabel>
                
                  <Input
                    name="phone_number"
                    type="text"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="md"
                    error={formState.errors.phone_number}
                    {...register('phone_number')}>
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
                  {...register('address')}>
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
                  {...register('number')}>
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
                  {...register('district')}>
                </Input>
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
                  error={formState.errors.city}
                  {...register('city')}>
                </Input>
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
                  error={formState.errors.state}
                  {...register('state')}>
                </Input>
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
                  error={formState.errors.country}
                  {...register('country')}>
                </Input>
              </Box>
              <Box>
                <FormLabel htmlFor="cep">CEP</FormLabel>
              
                <Input
                  name="zip_code"
                  type="text"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="md"
                  error={formState.errors.zip_code}
                  {...register('zip_code')}>
                </Input>
              </Box>
            </SimpleGrid>
          </Box>
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
    </>
  )
}