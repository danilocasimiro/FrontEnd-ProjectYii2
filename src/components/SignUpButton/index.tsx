import { FaKey, FaUserPlus } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export function SignUpButton() {

  const [session] = useSession()
  const router = useRouter();
  
  return session ? (
   <button></button>
  ) : (
    <button
    type="button"
    className={styles.signUpbutton}
    onClick={() => router.push('/register')}
  >
    <FaUserPlus color="0999ff"/>
    Registre-se
  </button>
  )
    
  
}