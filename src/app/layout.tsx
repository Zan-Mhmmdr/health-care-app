
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
  MainPage,
}: {
  children: React.ReactNode,
  MainPage: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <main>{children}</main>
        <div>
          {MainPage}
        </div>
      </body>
    </html>
  )
}
