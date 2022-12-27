import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import GoogleAd from '@components/GoogleAd';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <GoogleAd slot="8502170963" googleAdId="ca-pub-3661812461656391"/>
      <Footer />
    </div>
  )
}
