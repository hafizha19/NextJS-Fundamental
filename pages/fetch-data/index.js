import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function FetchData() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/fetch-data/csr">
          <p>
            CSR
          </p>
        </Link>
        <Link href="/fetch-data/ssr">
          <p>
            SSR
          </p>
        </Link>
        <Link href="/fetch-data/ssg">
          <p>
            SSG
          </p>
        </Link>
        <Link href="/fetch-data/isr">
          <p>
            ISR
          </p>
        </Link>
      </main>
    </div>
  )
}
