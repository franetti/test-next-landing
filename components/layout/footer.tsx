import React from 'react'
import Image from 'next/image'
import FaqsImg from '../../public/faqs.png'
import {AiFillYoutube, AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import Faq from './components/Faq';
import {Faqs} from '../../const/index'
import Link from 'next/link';

const FooterHeader = () => {    
    return (
        <div className='my-8 md:my-12'>
            <p className='text-4xl lg:text-5xl font-bold'>Still got questions?</p>
            <ul className='text-2xl my-4 lg:my-16'>        
                {Faqs.map(x => (                                    
                    <Faq title={x.title} content={x.content} key={x.title} />                        
                ))}
            </ul>
            <button className='text-orangePrimary font-bold bg-white text-[1.25rem] rounded-full w-full md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] py-2 max-px-6'>
                <Link href="mailto:support@extraworks.app" >Contact Support Team</Link>
            </button>
        </div>
    )
}

const FooterBottom = () => {
    return (
        <div className='flex flex-col pb-0 md:pb-5'>            
            <p className='hidden md:flex'>extra</p>
            <div className='flex '>
                <nav className='flex flex-col w-full justify-start lg:flex-row lg:justify-between mt-5 '>
                    <Link className='underline underline-offset-4 mb-2 cursor-pointer' href="/helpcenter">Help Center</Link>
                    <div className='flex mb-2'>
                        <a><AiFillYoutube size="2em" className="mr-3"/></a>
                        <a><AiFillInstagram size="2em" className="mr-3"/></a>
                        <a><AiFillFacebook size="2em"/></a>
                    </div>                
                    <Link href="/termsandconditions" className='pr-2 mb-2'>Terms and conditions</Link>
                    <p>
                        Extraworks is a trademark<br/>
                        property of Linkwork Group LLC<br/>
                        © 2023. All rights reserved<br/>
                    </p>
                </nav>                
                <div className='flex self-end md:hidden'>
                    <Image
                        src={FaqsImg}
                        alt='Faqs'
                        width={100}
                    />
                </div>    
            </div>
        </div>
    )
}

const Footer = () => {
  return (
      <footer className="w-screen min-h-screen flex justify-between md:min-h-[80vh] px-6 py-6 pb-0  md:px-20 lg:px-30 xl:px-40    bg-black text-white">
        <div className='flex flex-col justify-between w-full'>
            <FooterHeader/> 
            <FooterBottom/> 
        </div>
        <div className='hidden md:flex self-end'>
            <Image
                src={FaqsImg}
                  alt='Faqs'                  
                  width={155}
            />
        </div>        
    </footer>
  )
}

export default Footer