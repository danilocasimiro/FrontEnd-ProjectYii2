import { FaKey } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export function SignInButton() {

  const [session] = useSession()
  const router = useRouter();

  return session ? (
    <button
    type="button"
    className={styles.signInbutton}
    onClick={() => signOut()}
  >
    <FaKey color="0999ff"/>
    {session.user.name}
    <FiX color="737380" className={styles.closeIcon} />
  </button>
  ) : (
    <button
    type="button"
    className={styles.signInbutton}
    onClick={() =>  router.push('/login')}
  >
    <FaKey color="0999ff"/>
    Login
  </button>
  )
    
  
}