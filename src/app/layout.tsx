'use client'

import { Geist, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header/Header"
import { SessionProvider } from "next-auth/react"
// import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: {
    default: 'Nama Situsmu',
    template: '%s | Nama Situsmu',
  },
  description: 'Deskripsi singkat tentang situs kamu.',
  keywords: ['Next.js', 'SEO', 'Web Development'],
  authors: [{ name: 'Nama Kamu', url: 'https://namakamu.com' }],
  creator: 'Nama Kamu',
  openGraph: {
    title: 'Nama Situsmu',
    description: 'Deskripsi Open Graph.',
    url: 'https://domainmu.com',
    siteName: 'Nama Situsmu',
    images: [
      {
        url: 'https://domainmu.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OG Image Alt',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nama Situsmu',
    description: 'Deskripsi untuk Twitter Card.',
    creator: '@twitterHandle',
    images: ['https://domainmu.com/og-image.jpg'],
  },
  metadataBase: new URL('https://domainmu.com'),
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // pilih sesuai kebutuhan
  variable: '--font-poppins',
  display: 'swap', // untuk performa yang lebih baik
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased `}>
          <Header />
          <main>
            {children}
          </main>
        </body>
      </SessionProvider>
    </html>
  )
}
