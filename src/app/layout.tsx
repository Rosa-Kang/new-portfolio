"use client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useState, useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })



import { CustomCursor } from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/layout/SmoothScroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobile, setIsMobile] = useState(true); // Assume mobile initially for SSR safety

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile); // Check on resize

    return () => {
      window.removeEventListener('resize', checkMobile); // Cleanup
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          {!isMobile && <CustomCursor />}
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