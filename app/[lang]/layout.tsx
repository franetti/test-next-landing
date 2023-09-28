import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Locale,i18n } from '@/i18n.config';
import {NextIntlClientProvider} from 'next-intl';

const poppins = Poppins({
  weight: ['400','700', '800'],
  preload: false,
})

export const metadata: Metadata = {
  title: 'Extraworks',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale}))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {lang: Locale }
  }) {
  
  let messages = (await import(`../../dictionaries/${params.lang}.json`)).default;

  return (
    <html lang={params.lang}>   
      <NextIntlClientProvider locale={params.lang} messages={messages}>
        <body className={poppins.className}>
          <Header/>
          {children}
          <Footer/>
        </body>      
      </NextIntlClientProvider>
    </html>
  )
}
