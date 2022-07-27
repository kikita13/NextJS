import { Layout } from '@components/Layout/Layout'
import { Provider } from 'react-redux'
import '../styles/globals.css'
import { store } from 'store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp
