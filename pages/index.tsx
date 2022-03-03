import styles from '../styles/home.module.scss';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <h1 className={styles.title}>
        Hello <span>Word</span>
      </h1>
    </>
  )
}
