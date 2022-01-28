import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { HeaderSystem } from '../../components/HeaderSystem'
import LeftMenu from '../../components/LeftMenu'
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (!session && status == "unauthenticated") {
    router.push('/');
  }
  return (
    <>
      <HeaderSystem />
      <Head>
        <title>Página inicial - Your Search </title>
      </Head>
      <LeftMenu name={session?.user.name} email={session?.user.email} type={session?.user.type} />
    </>
  )
}