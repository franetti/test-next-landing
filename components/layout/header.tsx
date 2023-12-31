'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Extra from '../../public/extra.svg'
import Palmerita from '../../public/Palmerita.svg'
import Link from 'next/link'
import LocaleSwitcher from './components/Locale-Switcher'
import { useLocale, useTranslations } from 'next-intl'
import {TbWorld} from 'react-icons/tb'

const Header = () => {        
    const locale = useLocale();
    
  return (
    <header className='w-screen text-white fixed z-20 flex justify-between items-center px-6 py-4 md:px-20 lg:px-30 xl:px-40  bg-black'>
        <div className=''>      
            <Link href={`/${locale}`} className="flex items-center text-4xl font-bold"><Image src={Extra} alt={'Extra'} width={125}/></Link>
        </div>
        <div>
            <Link href={`/${locale}/helpcenter`} className="underline underline-offset-8 cursor-pointer hover:text-orangePrimary">
                  <span className="hidden md:inline">Help Center + FAQs</span>
                  <span className="inline md:hidden">FAQs</span>
            </Link>
        </div>
        <nav>
            <ul className="flex">
                <li>
                      <span className="flex items-center">
                        <TbWorld className="mr-3 hidden md:inline" />
                        <LocaleSwitcher/>    
                        <Image
                            src={Palmerita}
                            alt='icon'
                            className='ml-3 hidden md:inline'                  
                        />
                    </span>
                </li>                                
            </ul> 
        </nav>
    </header>
  )
}

export default Header