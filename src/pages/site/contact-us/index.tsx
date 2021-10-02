import Head from 'next/head';
import { Header } from '../../../components/Header';
import styles from './contact_us.module.scss';

export default function ContactUs() {
  return (
    <>
     <Header />
      <Head>
        <title>Home | Your research</title>
      </Head>

     <main className={styles.main}>
       <img src="/images/capa.jpg" alt="Book" className={styles.imgCapa} />
      </main>
    </>
  )
}