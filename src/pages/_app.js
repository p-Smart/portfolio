import '@/styles/globals.css'
import '@/styles/media.css'
import Layout from '@/components/Layout'
import Head from 'next/head'
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react'
import ThemeContext from '@/contexts/themeContext'


export default function MyApp({ Component: Pages, pageProps}) {
  const [theme, setTheme] = useState(null)

  const name = "Prince Ajayi | Web Developer"
  const description = "Full stack Web developer | React.js | Node.js | PHP"
  const url = "https://princeajayi.vercel.app"
  return( 
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <Head>
        <title>{name}</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />
        <meta name="description" content={description} />
        <meta itemprop="description" property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta itemprop="name" property="og:title" content="The Blacklist Season 10 Episode 22" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content="https://static.netnaija.com/i/AqgKGlZ47r1.webp" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Pages {...pageProps} />
        <ToastContainer />
      </Layout>
      </ThemeContext.Provider>
   )
}










