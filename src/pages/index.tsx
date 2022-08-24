import Head from 'next/head';
import styles from '../styles/home.module.scss';


export default function Home() {
  return (
    <>
      <Head >
        <title>Home | gb.news</title>
      </Head>
      <main  className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>&#128079; Hey, Welcome </span>
          <h1>News about the <span>React</span> word.</h1>
          <p>
            Get access to all publications <br/>
            <span>for $9.90 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>

    </>
  )
}
