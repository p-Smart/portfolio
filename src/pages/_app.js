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
  const title = "Prince Ajayi | Web Developer"
  return( 
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />
      </Head>
      <Layout>
        <Pages {...pageProps} />
        <ToastContainer />
      </Layout>
      </ThemeContext.Provider>
   )
}










