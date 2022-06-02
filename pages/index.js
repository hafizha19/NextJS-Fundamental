import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.border}>
          <Link href="/fetch-data/csr">
            <h1 style={{ background: 'none', color: 'white' }}>
              CSR
            </h1>
          </Link>
          <Link href="/fetch-data/ssr">
            <h1 style={{ background: 'none', color: 'white' }}>
              SSR
            </h1>
          </Link>
          <Link href="/fetch-data/ssg">
            <h1 style={{ background: 'none', color: 'white' }}>
              SSG
            </h1>
          </Link>
          <Link href="/fetch-data/isr">
            <h1 style={{ background: 'none', color: 'white' }}>
              ISR
            </h1>
          </Link>
        </div>
      </main>
    </div>
  )
}
