import Image from "next/image";
import { useState } from "react";
import Login from "../../../services/login";
import styles from './styles.module.scss'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  function handleSubmit(event) {
    event.preventDefault();

    Login(email, password)
  }

  return (
    <>
      <div className={styles.limiter}>
        <div className={styles.containerLogin100}>
          <div className={styles.wrapLogin100}>
            <div className={styles.login100Pic} data-tilt>
              <Image src={'/../public/images/imagemLogin.png'} width={400} height={400} alt="Login" />
            </div>

            <form className={styles.login100Form} onSubmit={(event) => handleSubmit(event)}>
              <span className={styles.login100FormTitle}>
                Member Login
              </span>

              <div className={styles.wrapInput100} data-validate="Valid email is required: ex@abc.xyz">
                <input className={styles.input100} type="text" name="email" placeholder="Email" onChange={event => setEmail(event.currentTarget.value)} />
                <span className={styles.focusInput100}></span>
                <span className={styles.symbolInput100}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className={styles.wrapInput100} data-validate="Password is required">
                <input className={styles.input100} type="password" name="pass" placeholder="Password" onChange={event => setPassword(event.currentTarget.value)}/>
                <span className={styles.focusInput100}></span>
                <span className={styles.symbolInput100}>
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className={styles.containerLogin100FormBtn}>
                <button className={styles.login100FormBtn}>
                  Login
                </button>
              </div>

              <div className="text-center p-t-12">
                <span className={styles.txt1}>
                  Forgot
                </span>
                <a className={styles.txt2} href="#">
                  Username / Password?
                </a>
              </div>

              <div className="text-center p-t-136">
                <a className={styles.a} href="#">
                  <p className={styles.txt3}>Create your Account </p>
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};