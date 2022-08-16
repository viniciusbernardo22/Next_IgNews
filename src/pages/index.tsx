import Head from 'next/head'
import SubscribeButton from '../components/subscribeButton'
import styles from './home.module.scss'
import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'
interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>HOME | IG News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, Welcome</span>
          <h1>
            News About the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>
              for{' '}
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(product.amount)}{' '}
              month
            </span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LUb3UIDZvZ6ey4BcwuuAkmv')

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100
  }
  return { props: { product }, revalidate: 60 * 60 * 24 }
}
