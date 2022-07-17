import { Layout } from '@components/Buttons/Layout/Layout'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
