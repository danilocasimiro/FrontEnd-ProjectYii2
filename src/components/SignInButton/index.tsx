import { FaKey } from 'react-icons/fa'

import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export function SignInButton() {
  const cookies = Cookies.get('nextauth.token')
 
  const router = useRouter();

  return !cookies ? (
    <button
      type="button"
      className={styles.signInbutton}
      onClick={() =>  router.push('/site/login')}
    >
      <FaKey color="0999ff"/>
      Login
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInbutton}
      onClick={() =>  router.push('/dashboard')}
    >
      <FaKey color="0999ff"/>
      Acessar painel
    </button>
  )

}