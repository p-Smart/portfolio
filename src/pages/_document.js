import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const title = "Prince Ajayi | Web Developer"
  const description = "Full stack Web developer | React.js | Node.js | PHP"
  const url = "https://princeajayi.vercel.app"
  const imageUrl = "https://static.netnaija.com/i/AqgKGlZ47r1.webp"


  return (
    <Html lang="en">
      <Head>
      <meta name="description" content={description} />
      <meta itemprop="description" property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemprop="image" content={imageUrl}/>
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_GB" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
      <link itemprop="thumbnailUrl" href={imageUrl} />
      <span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject">
        <link itemprop="url" href={imageUrl} />
      </span>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
