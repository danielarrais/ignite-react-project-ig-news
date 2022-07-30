import { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { SessionProvider } from "next-auth/react"

import '../styles/global.scss';


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Header  {...pageProps} />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
