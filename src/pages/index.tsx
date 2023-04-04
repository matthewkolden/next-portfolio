import Head from 'next/head'
import IntroHeader from '@/components/IntroHeader'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

import LazyShow from '@/components/LazyShow'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew Kolden</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LazyShow>
        <IntroHeader />
      </LazyShow>
      <LazyShow>
        <Technologies />
      </LazyShow>
      <LazyShow>
        <Projects />
      </LazyShow>
      <LazyShow>
        <Contact />
      </LazyShow>
    </div>
  )
}
