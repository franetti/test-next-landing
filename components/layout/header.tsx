import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import { TbWorld } from 'react-icons/tb'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-screen absolute z-10 top-0 flex justify-between items-center px-6 md:px-20 lg:px-30 xl:px-40 py-7 '>
        <div className=''>      
            <Link href="/">                
                <Image
                src={Logo}
                alt='Extraworks' 
                width={150} />
            </Link>                  
        </div>
        <nav>
              <ul className="flex">
                <li className='mr-5'>
                    <Link href='/helpcenter' className="hover:underline">Help Center</Link>  
                </li>
                <li className='hidden md:inline'>
                    <span className="flex items-center">Hola miami <TbWorld className="ml-3"/></span>
                </li>
            </ul> 
        </nav>
    </header>
  )
}

export default Header