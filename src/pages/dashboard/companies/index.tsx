import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Table, TableCaption, Thead, Th, Tr, Tbody, Td, Tfoot } from "@chakra-ui/table";
import { useSession } from "next-auth/client";
import { HeaderSystem } from "../../../components/HeaderSystem";
import { SideBar } from "../../../components/SideBar";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { api } from "../../../services";
import { Input } from "@chakra-ui/input";
import { FormLabel } from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/button";
import toast, { Toaster } from 'react-hot-toast';
import { IconButton } from '@chakra-ui/react'
import { EditIcon, SearchIcon, ViewIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

type Company = {
  name: string,
  foundation: string,
  cnpj: string,
  id: string
}

export default function View() {
  const [ session, loading ] = useSession()
  const [companies, setCompanies] = useState()
  const [search, setSearch] = useState('')
  const [cookies, setCookie] = useCookies();
  const router = useRouter();
 
  async function handleSubmit(data) {
    const loading = toast.loading('Aguarde....')
    data.preventDefault();
  
    await api.get<Company[]>(`/companies?search=${search}`, {
      headers: {
        Authorization: `Bearer ${cookies.next_auth_token}`
      }
    }).then((response) => {
      setCompanies(response.data);
      toast.remove(loading)
      if(!!response && response.data.length > 0) {
        toast.success('Busca realizada com sucesso!!!')  
      }
      
      if(response.data.length == 0) {
        setCompanies('');
        toast.error('Empresa não encontrada!!!')
      }

    }).catch((e) => { 
      toast.remove(loading)
      setCompanies('');
      toast.error('Empresa não encontrada!!!')
    })
    
  }

  if (loading) {
    return <p>Loading…</p>
  }
  
  if (!loading && !session) {
    return <p>You must be signed in to view this page</p>
  }

  return(
    <>
    <HeaderSystem />
    <SideBar/>
    <Stack spacing={3} marginTop="5">
      <Text as="em" fontSize="2xl" height="10" borderRadius="10" color="#61dafb" bg="#373d4b">Listar/Empresas</Text>
    </Stack>
    <Flex
        as="form"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit}
        >
        {toast}
        <Toaster />
        <Box>
          <FormLabel htmlFor="search" as="i" fontSize="xl" height="10" color="#61dafb">Buscar empresa</FormLabel>
        
          <Input
            name="search"
            type="text"
            variant="filled"
            _hover={{
              bgColor: 'gray.900'
            }}
            size="md"
            width="30%"
            onChange={event => setSearch(event.currentTarget.value)}
          />
             <Button
            type="button"
            colorScheme="blue"
            size="sm"
            ml="6"
            onClick={handleSubmit}
          >
            Buscar
          </Button>
        </Box>
      </Flex>
      { companies ?  ( 
      <Table variant='striped' colorScheme='blackAlpha' width="85%">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Data de fundação</Th>
            <Th>CNPJ</Th>
            <Th>Visualizar</Th>
            <Th>Editar</Th>
          </Tr>
        </Thead>
       
        <Tbody>
        { companies?.map(company => {
          return (<Tr key={company.id}>
            <Td>{company.name}</Td>
            <Td>{company.foundation}</Td>
            <Td>{company.cnpj}</Td>
            <Td><IconButton colorScheme='blue' aria-label='Search database' onClick={() => router.push(`/dashboard/profile?id=${company.auth_user_id}`)} icon={<ViewIcon />} /></Td>
            <Td><IconButton colorScheme='blue' aria-label='Search database' onClick={() => router.push(`/dashboard/profile?id=${company.auth_user_id}`)} icon={<EditIcon />} /></Td>
          </Tr>)
          })}
        </Tbody>
      
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
      ) : (
      '')}
    </>
  );
}