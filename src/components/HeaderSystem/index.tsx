import { FaSearch } from "react-icons/fa";
import styles from './styles.module.scss'

export function HeaderSystem() {

  return (
    <>
      <nav>
        <div className={styles.nav}>
          <input type="text" className={styles.searchMenu} placeholder="Search..." />
          <span className={styles.inputGroupText}>
            <FaSearch />
          </span>
        </div>
      </nav>
    </>
  );
}