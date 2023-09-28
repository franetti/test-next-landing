'use client'
//import Link from 'next/link'
import {usePathname} from 'next-intl/client';
import { i18n } from '@/i18n.config'
import Link from 'next-intl/link';

export default function LocaleSwitcher() {
  const pathName = usePathname()

  return (
    <>
      {i18n.locales.map(locale => {
        return (
          <Link
          href={pathName}
          locale={ locale}
          className='rounded-md border bg-black px-2 py-1 text-white mx-1 hover:text-orangePrimary'
          key={locale}
          >
            {locale}
          </Link>
        )
      })}
    </>
  )
}