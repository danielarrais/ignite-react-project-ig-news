import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './index.module.scss';

interface HomeProps {
  product: {
    priceId: string,
    ammount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.ammount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img
          src="/images/avatar.svg"
          alt="Girl coding"
        />
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve(
    'price_1LMdrEJylAMBjOu6bVJMwOlC',
    { expand: ['product'] }
  );

  const product = {
    priceId: price.id,
    ammount: new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: { product }
  }
}