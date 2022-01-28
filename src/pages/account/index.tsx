import Head from "next/head";
import UserForm from "../../components/Forms/UserForm";
import { HeaderSystem } from "../../components/HeaderSystem";
import LeftMenu from "../../components/LeftMenu";
import { useState, useEffect } from 'react'
import { api } from "../../services/axios";
import { useRouter } from "next/router";
import AddressForm from "../../components/Forms/AddressForm";
import AvatarForm from "../../components/Forms/AvatarForm";
import SocialNetworksForm from "../../components/Forms/SocialNetworksForm";
import CompanyForm from "../../components/Forms/CompanyForm";
import { getSession, useSession } from "next-auth/react";

interface ServerProps {
  id: string
}

export default function Account({ id }: ServerProps) {

  const { data: session, status } = useSession();
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState();
  const [currentUserPhone, setCurrentUserPhone] = useState('');
  const profileId = id ? id : session?.user.friendly_id

  if (!session && status == "unauthenticated") {
    router.push('/');
  }

  useEffect(() => {

    api.get(`/auth-users?filter[auth_users.friendly_id]=${profileId}&expand=person,company,address,phone,socialNetwork`, {
      headers: {
        Authorization: `Bearer ${session?.token}`
      }
    }).then((response) => {
      setCurrentUser(response.data[0]);
      setCurrentUserPhone(`(${response.data[0].phone.ddd}) ${response.data[0].phone.number}`)

    }).catch((e) => { console.log(e) })

  }, [profileId])

  return (
    <>
      <HeaderSystem />
      <Head>
        <title>Dados do Usuário - Your Search </title>
      </Head>
      <AvatarForm currentUser={currentUser} />

      <UserForm currentUser={currentUser} currentUserPhone={currentUserPhone} />
    
      <CompanyForm currentUser={currentUser} currentUserPhone={currentUserPhone} />
      
      <AddressForm currentUser={currentUser} />
      <SocialNetworksForm currentUser={currentUser} />
      <LeftMenu name={currentUser?.person?.name ?? currentUser?.company?.name} email={currentUser?.email} type={currentUser?.type} />

    </>
  )
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id ? ctx.query.id : null
  return {
    props: {
      session: await getSession(ctx),
      id
    }
  }
}