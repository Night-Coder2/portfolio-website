import Image from 'next/image'
import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sudhir&apos;s Portfolio</title>
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
