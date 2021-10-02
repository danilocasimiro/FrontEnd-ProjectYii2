import Head from 'next/head';
import { Header } from '../../../components/Header';
import styles from './plans.module.scss';

export default function Plans() {
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