import { HeaderSystem } from "../../components/HeaderSystem";
import { SideBar } from "../../components/SideBar";
import { parseCookies } from "nookies";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { api } from "../../services";

export default function Dashboard() {

  const cookies = Cookies.get('nextauth.token')

  try {
    const { user } = jwtDecode(cookies)
    const currentUser = api.get(`auth-users/${user.id}`)
    console.log(currentUser)
  } catch(error) {
    
    console.log(error)
  }

  return (
    
    <>
    <HeaderSystem />
    <SideBar/>
    </>
  );
}

export async function getServerSideProps(context) {
  const { ['nextauth.token']: token } = parseCookies(context)
  
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }


  return {
    props: {}, // Will be passed to the page component as props
  }
}