import { Divider, MenuList, MenuItem, MenuButton, Menu, Flex, MenuOptionGroup, MenuItemOption, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function isActiveMenu(paths) {
  const router = useRouter();
  
  const isActive = paths.includes(router.pathname)

  return isActive
}

export function SideBar() {
  const router = useRouter();

  return (
    <Flex
    w="50"
    h="50vh"
    maxW={40}
    minH={350}
    bg="gray.800"
    p="8"
    borderRadius={10}
    flexDir="column"
    marginTop="5"
    float="left"
    marginRight="5"
  >
    <Stack spacing="4">
      <Menu closeOnSelect={false}>
        <MenuItem color={isActiveMenu(['/dashboard']) ? "#4599b1" : ''} as="button" marginLeft="-2" onClick={() => router.push('/dashboard')} _hover={{color: "#09647e"}}>Dashboard</MenuItem>
      </Menu>
      <Divider/>
      <Menu closeOnSelect={false}>
        <MenuButton color={isActiveMenu(['/dashboard/companies/create', '/dashboard/companies']) ? "#4599b1" : ''} _hover={{color: "#09647e"}} >Empresas</MenuButton>
        <MenuList bg="#2a9ab9">
          <MenuOptionGroup defaultValue="asc" type="radio">
            <MenuItemOption value="registerCompany" onClick={() => router.push('/dashboard/companies/create')} _hover={{bgColor: '#09647e'}} borderRadius={10}>Cadastrar</MenuItemOption>
            <MenuItemOption value="viewCompanies" onClick={() => router.push('/dashboard/companies')} _hover={{bgColor: '#09647e'}} borderRadius={10}>Visualizar</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Divider/>
      <Menu closeOnSelect={false}>
        <MenuButton color={isActiveMenu(['/dashboard/users/create', '/dashboard/users']) ? "#4599b1" : ''} _hover={{color: "#09647e"}}>Usuários</MenuButton>
        <MenuList bg="#2a9ab9">
          <MenuOptionGroup type="checkbox">
            <MenuItemOption value="registerUser" onClick={() => router.push('/dashboard/users/create')} _hover={{bgColor: '#09647e'}} borderRadius={10}>Cadastrar</MenuItemOption>
            <MenuItemOption value="viewUser" onClick={() => router.push('/dashboard/users')} _hover={{bgColor: '#09647e'}} borderRadius={10}>Visualizar</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Divider/>
      <Menu closeOnSelect={false}>
        <MenuButton _hover={{color: "#09647e"}}>Gráficos</MenuButton>
        <MenuList bg="#2a9ab9">
          <MenuOptionGroup type="checkbox">
            <MenuItemOption value="userCharts" _hover={{bgColor: '#09647e'}} borderRadius={10}>Usuários</MenuItemOption>
            <MenuItemOption value="CompanyCharts" _hover={{bgColor: '#09647e'}} borderRadius={10}>Empresas</MenuItemOption>
            <MenuItemOption value="SearchCharts" _hover={{bgColor: '#09647e'}} borderRadius={10}>Pesquisas</MenuItemOption>
            <MenuItemOption value="IncomeCharts" _hover={{bgColor: '#09647e'}} borderRadius={10}>Rendimentos</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Divider/>
      <Menu closeOnSelect={false}>
        <MenuButton _hover={{color: "#09647e"}}>Relatórios</MenuButton>
        <MenuList bg="#2a9ab9">
          <MenuOptionGroup type="checkbox">
            <MenuItemOption value="UserReport" _hover={{bgColor: '#09647e'}} borderRadius={10}>Usuários</MenuItemOption>
            <MenuItemOption value="CompanyReport" _hover={{bgColor: '#09647e'}} borderRadius={10}>Empresas</MenuItemOption>
            <MenuItemOption value="SearchReport" _hover={{bgColor: '#09647e'}} borderRadius={10}>Pesquisas</MenuItemOption>
            <MenuItemOption value="IncomeReport" _hover={{bgColor: '#09647e'}} borderRadius={10}>Rendimentos</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Stack>
  </Flex>
  );
}