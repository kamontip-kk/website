import '../styles/globals.less'
import '../styles/Home.less'
import type { AppProps } from 'next/app'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
