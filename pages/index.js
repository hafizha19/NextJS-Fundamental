import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.border}>
          <div className={styles.border}>
            <h1 style={{ color: 'white' }}>ApolloClient</h1>
            <Link href="/categories">
              <h3 style={{ color: 'white' }}>
                Use Query
              </h3>
            </Link>
            <Link href="/categories/lazy">
              <h3 style={{ color: 'white' }}>
                Lazy Query
              </h3>
            </Link>
            <Link href="/news/add">
              <h3 style={{ color: 'white' }}>
                Mutation (Add subscribe)
              </h3>
            </Link>
          </div>
          <Link href="/fetch-data/csr">
            <h1 style={{ color: 'white' }}>
              CSR
            </h1>
          </Link>
          <Link href="/fetch-data/ssr">
            <h1 style={{ color: 'white' }}>
              SSR
            </h1>
          </Link>
          <Link href="/fetch-data/ssg">
            <h1 style={{ color: 'white' }}>
              SSG
            </h1>
          </Link>
          <Link href="/fetch-data/isr">
            <h1 style={{ color: 'white' }}>
              ISR
            </h1>
          </Link>
        </div>
      </main>
    </div>
  )
}
