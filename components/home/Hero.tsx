'use client';
import {useTranslations} from 'next-intl';
import React from 'react'
import Image from 'next/image'
import HeroSvg from '../../public/HeroSvg.svg'
import MiniLogo from '../../public/mini_logo.svg'

const Hero =  () => {
    const t =  useTranslations('home');

  return (
    <section className='w-screen h-full min-h-[600px] lg:min-h-[700px] xl:min-h-[750px] 2xl:min-h-[850px] flex justify-start bg-gradient-to-b from-lightBlueGradient to-whiteGradient p-6 pt-24 md:pb-0 md:px-20 md:pt-36 xl:px-40'>
        <div className='w-auto flex md:absolute'>    
            <div className='flex flex-col items-start justify-center'>
                <h1 className='text-4xl md:text-4xl/[inherit] lg:text-5xl/[inherit] xl:text-6xl/[inherit] 2xl:text-8xl font-extrabold' dangerouslySetInnerHTML={{__html: t.raw('titlehero')}}></h1>                
                < p className=' text-xl md:text-1xl lg:text-2xl/[inherit] 2xl:text-3xl  font-medium mb-8 mt-2'>
                    <span><Image src={MiniLogo} alt='logo' className='w-fit inline-block mr-1' /></span>
                    { t('subtitle1')} <br/>
                    { t('subtitle2')}
                </p>
                < p className=' text-xl md:text-1xl lg:text-2xl/[inherit] 2xl:text-3xl  font-medium mb-6 mt-2'>{ t('infoButton')}</p>  
                <button className='rounded-full drop-shadow-xl text-2xl md:text-2xl hover:bg-black  2xl:text-3xl bg-orangePrimary text-white px-7 py-1 md:px-8 md:py-2 2xl:px-9 2xl:py-2'>
                   { t('buttonHero')}
                </button>          
            </div>                     
        </div>      
        <div className='hidden md:flex flex-col justify-end items-end flex-grow'>
            <Image
                src={HeroSvg}
                alt='Hero'
                className='flex justify-end md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%]'                  
           />
        </div>  
    </section>
  )
}

export default Hero;
