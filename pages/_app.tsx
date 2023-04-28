import { EmptyLayout } from '@/component/layout';
import { AppPropsWithLayout } from '@/models/commont';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  console.log('App re-render');

  const Layout = Component.Layout ?? EmptyLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
