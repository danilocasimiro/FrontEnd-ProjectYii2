import { FaUserPlus } from 'react-icons/fa'
import Cookies from 'js-cookie';

import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export function SignUpButton() {

  const router = useRouter();
  const cookies = Cookies.get('nextauth.token')

  if(!cookies) {

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