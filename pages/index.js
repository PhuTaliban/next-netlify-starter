import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'
import GoogleAd from '@components/GoogleAd';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3661812461656391"
          crossorigin="anonymous" />
      </Head>
      <GoogleAd slot="8502170963" googleAdId="ca-pub-3661812461656391"/>
      <Footer />
    </div>
  )
}
