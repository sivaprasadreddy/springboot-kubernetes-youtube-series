import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import NavBar from "../components/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
        <Head>
          <title>Bookmarks</title>
        </Head>
        <NavBar/>
        <main>
          <Component {...pageProps} />
        </main>
      </>
  )
}

export default MyApp
