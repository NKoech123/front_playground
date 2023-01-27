import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from 'components/Header'
import Nav from 'components/Nav'
import Results from 'components/Results'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Nav/>
      <Results/>
      
    </>
  )
}
