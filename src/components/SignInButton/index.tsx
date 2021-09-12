import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {

  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
    type="button"
    className={styles.signInbutton}
  >
    <FaGithub color="04d361"/>
    Jose maria
    <FiX color="737380" className={styles.closeIcon} />
  </button>
  ) : (
    <button
    type="button"
    className={styles.signInbutton}
  >
    <FaGithub color="eba417"/>
    Sign in with Github
  </button>
  )
    
  
}