import Head from 'next/head';
import { GetStaticProps } from 'next';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from '../styles/home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps{
  product:{
    priceId: string,
    amount: number
  }
}
export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" width="336" height='521'/>
      </main>

    </>
  )
}
export const getStaticProps: GetStaticProps = async() => {

  /*const price = await stripe.prices.retrieve('price_1LaUH1Jvttk0LPiWs0lwlUpy', {
    expand: ['product']
  });
  If you want to get more product data, use the expand
  */
  const price = await stripe.prices.retrieve('price_1LaUH1Jvttk0LPiWs0lwlUpy');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency'
    }).format(price.unit_amount / 100),
  }
  return{
    props :{
      product
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}