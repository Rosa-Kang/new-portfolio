import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rosa Kang - Web Developer & Designer',
  description: 'Hello, I\'m a freelancer specializing in minimal design with years of expertise — based in Toronto, working remote. Let\'s create!',
}

import { CustomCursor } from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/layout/SmoothScroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          <CustomCursor />
          <div className="min-h-screen bg-white text-black flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}