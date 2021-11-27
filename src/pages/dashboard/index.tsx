import { HeaderSystem } from "../../components/HeaderSystem";
import { SideBar } from "../../components/SideBar";
import { useSession } from 'next-auth/client';
import { getSession } from "next-auth/client"

export default function Dashboard() {
  const [ session, loading ] = useSession()
  
  if (loading) {
    return <p>Loading…</p>
  }
  if (!loading && !session) {
    return <p>You must be signed in to view this page</p>
  }

  return (
    <>
    <HeaderSystem />
    <SideBar/>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}