import React from 'react'
import Image from 'next/image'
import HeroSvg from '../../public/HeroSvg.svg'

const Hero = () => {
  return (
    <section className='w-screen relative h-full min-h-[600px] lg:min-h-[650px] xl:min-h-[720px] 2xl:min-h-[800px] flex justify-start bg-gradient-to-b from-lightBlueGradient to-whiteGradient p-6 pt-20 md:pb-0 md:px-20 md:pt-32 xl:px-40'>
        <div className='w-auto flex md:absolute'>    
            <div className='flex flex-col items-start justify-center'>
                <h1 className='text-4xl md:text-4xl/[inherit] lg:text-5xl/[inherit] xl:text-6xl/[inherit] 2xl:text-8xl font-bold'>
                The #1st App that meets <br/>
                demands and needs of <br/>
                the new casual-work era. 
                </h1>
                <p className='text-xl md:text-1xl lg:text-2xl/[inherit] 2xl:text-3xl  font-medium mb-10 mt-2'>
                Extracts businesses and workers after temporary jobs<br />
                in Miami’s gig industry. Choose what’s best for you, every day.
                </p>
                <button className='rounded-full text-2xl md:text-2xl  2xl:text-3xl bg-orangePrimary text-white px-7 py-1 md:px-8 md:py-2 2xl:px-9 2xl:py-2'>
                Get de App
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
