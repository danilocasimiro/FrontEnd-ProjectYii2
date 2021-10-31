import { HeaderSystem } from "../../components/HeaderSystem";
import { SideBar } from "../../components/SideBar";
import { parseCookies } from "nookies";

export default function Dashboard() {

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