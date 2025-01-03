import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Container } from './components/container'
import Head from 'next/head'
import Favicon from '../public/favicon.ico'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Shivam Katare | Frontend Engineer',
    template: '%s | Shivam Katare',
  },
  description: 'Frontend Engineer, and a Technical Writer.',
  openGraph: {
    title: 'Shivam Katare | Frontend Engineer',
    description: 'Frontend Engineer, and a Technical Writer.',
    url: baseUrl,
    siteName: 'Shivam Katare',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Shivam Katare Portfolio Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Katare | Frontend Engineer',
    description: 'Frontend Engineer, and a Technical Writer.',
    site: '@Shivamkatare_27',
    creator: '@Shivamkatare_27',
    images: [`${baseUrl}/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" sizes='32x32' />
      </Head>
      <body className="mx-auto flex max-w-3xl flex-col items-stretch pt-2 px-5 sm:px-0">
        <Container className="mx-auto flex max-w-3xl flex-col items-stretch py-10">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </Container>
      </body>
    </html>
  )
}
