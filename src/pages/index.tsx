import { useSession } from 'next-auth/react';
import Head from 'next/head';
import {Header} from '../components/Header'

export default function Home() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <>
    <Header />
    <Head>
      <title>Inicio - Your Search </title>
    </Head>
    </>
  )
}
