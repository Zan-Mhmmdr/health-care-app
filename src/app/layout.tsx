// src/app/layout.tsx
"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/Header/Header"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/register")

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {!isAuthPage && <Header />}
        <main>{children}</main>
      </body>
    </html>
  )
}
