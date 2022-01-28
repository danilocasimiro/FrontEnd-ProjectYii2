import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchForm from "../../../components/Forms/SearchForm";
import { HeaderSystem } from "../../../components/HeaderSystem";
import LeftMenu from "../../../components/LeftMenu";


export default function Search() {

  const router = useRouter();
  const { data: session, status } = useSession();

  if (!session && status == "unauthenticated") {
    router.push('/');
  }

  return (
    <>
      <HeaderSystem />
      <Head>
        <title>Buscar usuário - Your Search </title>
      </Head>
      <SearchForm token={session?.token} />
      <LeftMenu name={session?.user.name} email={session?.user.email} type={session?.user.type} />
      
    </>
  )
}