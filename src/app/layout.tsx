import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Providers } from '@/context/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Steph & Max Wedding',
  description: 'Join us in celebrating our special day - October 18, 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

