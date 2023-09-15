import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400','700', '800'],
  preload: false,
})

export const metadata: Metadata = {
  title: 'Extra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer/>
      </body>      
    </html>
  )
}
