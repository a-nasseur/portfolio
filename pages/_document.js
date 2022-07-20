import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </Head>
      <body id='/'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}