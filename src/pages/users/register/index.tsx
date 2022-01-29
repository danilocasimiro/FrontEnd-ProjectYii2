import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import SendButton from "../../../components/Buttons/SendButton";
import AddressFormRegister from "../../../components/Forms/AddressFormRegister";
import AvatarFormRegister from "../../../components/Forms/AvatarFormRegister";
import SocialNetworksFormRegister from "../../../components/Forms/SocialNetworksFormRegister";
import { UserFormRegister } from "../../../components/Forms/UserFormRegister";
import { HeaderSystem } from "../../../components/HeaderSystem";
import LeftMenu from "../../../components/LeftMenu";
import styles from './styles.module.scss'

export default function Register() {
  
  const router = useRouter();
  const { data: session, status } = useSession();

  if (!session && status == "unauthenticated") {
    router.push('/');
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event)
  }

  return (
    <>
      <HeaderSystem />
      <Head>
        <title>Novo usuário - Your Search </title>
      </Head>
      <form className={styles.login100Form} onSubmit={(event) => handleSubmit(event)}>
        <AvatarFormRegister />
        <UserFormRegister />

        <AddressFormRegister />
        <SocialNetworksFormRegister />
        <SendButton />
      </form>
      <LeftMenu name={session?.user.name} email={session?.user.email} type={session?.user.type} />
    </>
  )
}