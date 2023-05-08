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
        <title>Sudhir&apos;s Portfolio</title>
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
