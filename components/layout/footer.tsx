'use client'
import Image from 'next/image'
import FaqsImg from '../../public/faqs.png'
import Extra from '../../public/extra.svg'
import {AiFillYoutube, AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import Link from 'next-intl/link';
import { useLocale, useTranslations } from 'next-intl'
import FaqContainer from './components/FaqContainer'

const FooterHeader = () => {       
    const t = useTranslations('home.footer');    

    return (
        <div className='my-8 md:my-12'>
            <p className='text-4xl lg:text-5xl font-bold'>{t('title')}</p>
            <FaqContainer/>
            <button className='text-orangePrimary font-bold bg-white text-[1.25rem] rounded-full w-full md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] py-2 max-px-6'>
                <Link href="mailto:support@extraworks.app" >{ t('button')}</Link>
            </button>
        </div>
    )
}

const FooterBottom = () => {
    const t = useTranslations('home');    
    const locale = useLocale(); 

    return (
        <div className='flex flex-col pb-0 md:pb-5'>
            <Image src={Extra} alt={'Extra'} className='hidden md:flex' width={50} />            
            <div className='flex '>
                <nav className='flex flex-col w-full justify-start lg:flex-row lg:justify-between mt-5 '>
                    <Link className='underline underline-offset-4 mb-2 cursor-pointer hover:text-orangePrimary' href="/helpcenter" locale={locale}>Help Center + FAQs</Link>
                    <div className='flex mb-2'>
                        <a><AiFillYoutube size="2em" className="mr-3"/></a>
                        <a><AiFillInstagram size="2em" className="mr-3"/></a>
                        <a><AiFillFacebook size="2em"/></a>
                    </div>                
                    <Link href="/termsandconditions"  locale={locale} className='pr-2 mb-2'>{ t('footer.terms')}</Link>
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