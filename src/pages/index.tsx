import Head from 'next/head';
import { Header } from '../components/Header';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
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