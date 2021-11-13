import { FaKey } from 'react-icons/fa'

import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { signin, signIn, signOut, useSession } from 'next-auth/client'

export function SignInButton() {
  const router = useRouter();

  const [session] = useSession()

  return session ? (
    <button
      type="button"
      className={styles.signInbutton}
      onClick={() =>  router.push('/dashboard')}
    >
      <FaKey color="0999ff"/>
      Acessar painel
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInbutton}
      onClick={() =>  router.push('/site/login')}
    >
      <FaKey color="0999ff"/>
      Login
    </button>
  )   
}

