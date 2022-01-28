import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import AddressFormRegister from "../../../components/Forms/AddressFormRegister";
import AvatarFormRegister from "../../../components/Forms/AvatarFormRegister";
import SocialNetworksFormRegister from "../../../components/Forms/SocialNetworksFormRegister";
import UserFormRegister from "../../../components/Forms/UserFormRegister";
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
        <div className="text-center p-t-136">
          <button className={styles.a} type="submit">
            <p className={styles.txt3}>Create your Account </p>
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
          </button>
        </div>
      </form>
      <LeftMenu name={session?.user.name} email={session?.user.email} type={session?.user.type} />
    </>
  )
}