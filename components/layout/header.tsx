import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import { TbWorld } from 'react-icons/tb'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-screen absolute z-10 top-0 flex justify-between items-center px-6 md:px-20 lg:px-30 xl:px-40 py-7 '>
        <div className=''>                              
            <Image
                src={Logo}
                alt='Extraworks' 
                width={150} 
            />
        </div>
        <nav>
            <ul>
                <li className='flex items'>
                    <span className="flex items-center">Hola miami <TbWorld className="ml-3"/></span>
                </li>
            </ul> 
        </nav>
    </header>
  )
}

export default Header