'use client'

import { Geist, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header/Header"
import { SessionProvider } from "next-auth/react"
// import { SessionProvider } from "next-auth/react"


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
