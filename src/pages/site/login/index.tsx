import { Flex, Stack, Button, Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../../../components/Header';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from 'yup';
import { Input } from '../../../components/Form/Input'
import { signIn, useSession } from 'next-auth/client'
import { api } from '../../../services';
import { useRouter } from 'next/router';

const LoginUserFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa ser do mínimo 6 caracteres'),
})

type Login = {
  data: {
    user: {
      email: string,
      id: string
    },
    token: string,
    message: string,
    code: string
  }
}

export default function UserLogin() {
  const [session] = useSession()
  const router = useRouter();

  console.log(session)
  if(session) {
    router.push('/dashboard')
  }
  async function onSubmit(data) {
   
    const { email, password} = data;
    const response: Login = await api.post('/auth-users/login',
      {
          password,
          email
      },
    )
  
    if(response.data.code === '200') {

      signIn("credentials", response.data.user )
    }
  }

  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(LoginUserFormSchema)
  });

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
        onSubmit={handleSubmit(onSubmit)}
        >
        <Stack spacing="4">
          <Input 
            type="email"
            label="E-mail"
            _hover={{
              bgColor: 'gray.900'
            }}
            size="lg"
            error={formState.errors.email}
            {...register("email")}
            />
          <Input 
            type="password"
            label="Password"
            _hover={{
              bgColor: 'gray.900'
            }} 
            size="lg" 
            error={formState.errors.password}
            {...register("password")}
            />
          <Button
            type="submit"
            mt="6"
            colorScheme="blue"
            size="lg"
          >
            Entrar
          </Button>
        </Stack>
        </Flex>
      </Flex>
    </>
  );
}