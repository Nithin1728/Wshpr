import Postbox from '@/components/Postbox'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className= "">
      <Head> 
        <title>Wshpr</title>
      </Head>
      {/* PostBox */}
      <Postbox/>
      <div>
        {/* Feed */}
      </div>
    </div>
  )
}

