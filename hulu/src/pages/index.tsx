import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from 'components/Header'
import Nav from 'components/Nav'
import Results from 'components/Results'
import HuluMovies from 'utils/requests'

const inter = Inter({ subsets: ['latin'] })

export default function Home({results} : any) {
  console.log(results)
  return (
    <>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Nav/>
      <Results results={results}/>
      
    </>
  )
}

export async function  getServerSideProps(context: any) {
  const genre = context.query.genre;
  console.log("G",genre)

  const request = await fetch(
    `https://api.themoviedb.org/3/${
      HuluMovies[genre]?.url || HuluMovies.fetchTrending.url
    }`
  ).then((res)=>res.json());

  return {
    props: {
      results: request.results,
    },
  };

}
