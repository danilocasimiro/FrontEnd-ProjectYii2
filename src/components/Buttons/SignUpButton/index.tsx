import { FaUserPlus } from 'react-icons/fa'

import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export function SignUpButton() {

  const router = useRouter();
  const { data: session } = useSession();

  if(!session) {

    return (
      <button
      type="button"
      className={styles.signUpbutton}
      onClick={() => router.push('/site/register')}
    >
      <FaUserPlus color="0999ff"/>
      Registre-se
    </button>
    )
  } else {
    return (
      ''
    )
  }
    
  
}