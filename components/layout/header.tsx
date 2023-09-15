import React from 'react'
import Image from 'next/image'
import EVector from '../../public/E_Vector.svg'
import { TbWorld } from 'react-icons/tb'
import { GiPalmTree } from 'react-icons/gi'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-screen text-white fixed z-20 flex justify-between items-center px-6 py-4 md:px-20 lg:px-30 xl:px-40  bg-black'>
        <div className=''>      
            <Link href="/" className="flex items-center text-4xl font-bold">extra</Link>
        </div>
        <div>
             <Link href='/helpcenter' className="underline underline-offset-8">Help Center + FAQs</Link>
        </div>
        <nav>
            <ul className="flex">
                <li className='hidden md:inline'>
                    <span className="flex items-center"><TbWorld className="mr-3"/>Hola miami <GiPalmTree className="ml-3"/></span>
                </li>
            </ul> 
        </nav>
    </header>
  )
}

export default Header