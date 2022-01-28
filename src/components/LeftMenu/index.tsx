import Image from 'next/image'
import styles from './styles.module.scss'
import { useRouter } from "next/router";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaBuilding, FaCircle, FaWarehouse, FaElementor, FaUsers, FaHeadphonesAlt, FaHandsHelping, FaWrench, FaPoll, FaFile } from 'react-icons/fa';
import { signOut } from 'next-auth/react';

export default function LeftMenu({name, email, type}) {
  const router = useRouter();
  return (
    <ProSidebar>
      <SidebarHeader>
        {
          <>
            <nav id="sidebar" className={styles.sidebarWrapper}>
              <div className={styles.sidebarContent}>
                <div className={styles.sidebarBrand}>
                  <a href="#">your search</a>
                  
                </div>
                <div className={styles.sidebarHeader}>
                  <div className={styles.userPic}>
                    <Image src='/../public/images/logo-company.jpg' width={270} height={200} alt='User image' />
                  </div>
                  <div className={styles.userInfo}>
                    <span className="user-name">{name}</span>
                    <span className={styles.userRole}>{type}</span>
                    <span className={styles.userStatus}>
                      <FaCircle color='green' />
                      <span>  Online</span>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </>
        }
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem onClick={() => router.push('/dashboard')} icon={<FaWarehouse />}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => router.push('/account')} icon={<FaElementor />}>Minha conta</MenuItem>
      </Menu>
      <Menu iconShape="square">
        <SubMenu title="Usuários" icon={<FaUsers />}>
          <MenuItem onClick={() => router.push('/users/register')} >Cadastrar</MenuItem>
          <MenuItem onClick={() => router.push('/users/search')} >Visualizar</MenuItem>
        </SubMenu>
        <SubMenu title="Empresas" icon={<FaBuilding />}>
          <MenuItem>Cadastrar</MenuItem>
          <MenuItem>Visualizar</MenuItem>
        </SubMenu>
      </Menu>
      <Menu iconShape="square">
        <SubMenu title="Relatórios" icon={<FaFile />}>
          <MenuItem>Cadastrar</MenuItem>
          <MenuItem>Visualizar</MenuItem>
        </SubMenu>
        <SubMenu title="Gráficos" icon={<FaPoll />}>
          <MenuItem>Cadastrar</MenuItem>
          <MenuItem>Visualizar</MenuItem>
        </SubMenu>
      </Menu>
      <Menu iconShape="square">
        <SubMenu title="Configuração" icon={<FaWrench />}>
          <MenuItem>Cadastrar</MenuItem>
          <MenuItem>Visualizar</MenuItem>
        </SubMenu>
        <SubMenu title="Ajuda" icon={<FaHandsHelping />}>
          <MenuItem>Cadastrar</MenuItem>
          <MenuItem>Visualizar</MenuItem>
        </SubMenu>
        <SubMenu title="SAC" icon={<FaHeadphonesAlt />}>
          <MenuItem>Cadastrar</MenuItem>
          <MenuItem>Visualizar</MenuItem>
        </SubMenu>
      </Menu>
      <SidebarFooter>
        {
          <button
            type="button"
            className={styles.signOutbutton}
            onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}
          >
            Sair
          </button>
        }
      </SidebarFooter>
    </ProSidebar>
  )
}
