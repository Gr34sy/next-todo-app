import '@/styles/scss/main.scss';
import  Layout  from '../components/PageLayout/PageLayout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
