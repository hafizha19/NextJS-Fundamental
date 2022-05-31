import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/about">
          <p>
            About (coloring with globals.css)
          </p>
        </Link>
        <Link href='/news'>
          {/* <h1 className='styles2.border-black'> */}
            News
          {/* </h1> */}
        </Link>
      </main>
    </div>
  )
}
