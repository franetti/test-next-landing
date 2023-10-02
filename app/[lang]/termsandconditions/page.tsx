'use client'
import { useLocale } from 'next-intl';
import terms from '@/i18n/utils/terms/index';
import React, { useLayoutEffect } from 'react'



export default function Terms() {
    const locale = useLocale(); 
    const termsString = terms[locale as keyof typeof terms];

    // useLayoutEffect(() => {},[locale])
    
    return (
    <>
        <div className='w-screen h-full flex justify-center items-center bg-gradient-to-b from-lightBlueGradient to-whiteGradient p-6 pt-28 md:py-24  md:pt-40 md:px-20 xl:px-40'>        
            <h1 className='text-7xl font-bold'>Terms and conditions</h1>                
        </div>
        <div className='w-screen bg-whiteGradient flex flex-col items-center justify-center pb-10 px-2 md:px-20 xl:px-40'>
            <div className='flex w-full' >
                <p className='text-justify leading-5' dangerouslySetInnerHTML={{ __html:termsString}}>                    
                    
                </p>
            </div>
        </div>
    </>
  )
} 