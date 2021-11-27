import styles from './styles.module.scss';
import { Avatar, Divider,Center,  Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Image, Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

export function HeaderSystem() {
  const [session] = useSession()
  const router = useRouter();
  
  return (
    <header className={styles.headerContainer}>
      <Box height="5rem" margin="auto" display="flex" alignItems="center" border="">
        <Box marginLeft="1" marginBottom="150">
          <Image src="/images/logo.png" alt="ig.news" marginTop="160" w="40" />
        </Box>
        <nav>
        <InputGroup width="40rem" marginLeft="10">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="text" placeholder="Search for..." />
        </InputGroup>
         
        </nav>
        <Center height="50px" margin="auto" marginRight="10">
          <Divider orientation="vertical" />
        </Center>
        <Box marginRight='14px'>{session.user.name}</Box>
        <Menu>
          <MenuButton margin="auto" marginRight="10" marginLeft="0">
            <Avatar name="My avatar" src="../images/transferir.png"/>
          </MenuButton>
          <MenuList bg="#2a9ab9">
            <MenuGroup title="Profile" fontSize="20">
              <MenuItem as="button" _hover={{bgColor: '#09647e'}} borderRadius={10} onClick={() => router.push('/dashboard/profile')}>My Account</MenuItem>
              <MenuItem  _hover={{bgColor: '#09647e'}} borderRadius={10}>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help" fontSize="20">
              <MenuItem _hover={{bgColor: '#09647e'}} borderRadius={10}>Docs</MenuItem>
              <MenuItem _hover={{bgColor: '#09647e'}} borderRadius={10}>FAQ</MenuItem>
            </MenuGroup>
            <MenuDivider />
              <MenuItem _hover={{bgColor: '#09647e'}} borderRadius={10} onClick={() => signOut({ callbackUrl: `${window.location.origin}`})}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </header>
  );
}