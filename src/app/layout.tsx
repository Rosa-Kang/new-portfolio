import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ClientProvider from '@/components/providers/ClientProvider'

const inter = Inter({ subsets: ['latin'] })

// Metadata export (moved from layout.ts)
export const metadata: Metadata = {
  title: 'Therosessom- Website Solution Provider',
  description: 'Hello, I\'m Rosa Kang, a Web Developer with 4+ years of experience at innovative startups, and award-winning agencies. I find great joy in bringing my ideas to life through code. Let\'s create!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ClientProvider>
          <div className="min-h-screen bg-white text-black flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ClientProvider>
      </body>
    </html>
  )
}