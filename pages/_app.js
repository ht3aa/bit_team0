import Layout from '../components/layout'
import Seo from '../components/seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Seo />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
