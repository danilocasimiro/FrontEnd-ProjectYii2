import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from './ActiveLink';
import { SignUpButton } from '../SignUpButton';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="ig.news" className={styles.headerLogo} />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/'>
            <a>Página inicial</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active}  href='/plans' prefetch>
            <a>Planos</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active}  href='/about' prefetch>
            <a>Sobre</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active}  href='/contact-us' prefetch>
            <a>Contato</a>
          </ActiveLink>
        </nav>

        <SignUpButton/>
        <SignInButton/>
      </div>
    </header>
  );
}