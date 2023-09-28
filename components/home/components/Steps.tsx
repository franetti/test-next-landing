'use client';
import {useLocale, useMessages, useTranslations} from 'next-intl';
import React from 'react'
import Image from 'next/image'
import BodyImg from '@/public/bodyImg.svg'
import BodyImgEs from '@/public/bodyImgEs.svg'

type Props = {
    index: string,
    title: string,
    desc: string, 
    reverse?: boolean;
}

function Step( props: Props ) {    
    const { index, title, desc, reverse } = props    
  return (
    <li className={`flex mb-10 lg:mb-22 items-center ${reverse && 'flex-row-reverse justify-between'} `} >
        <div className="border-2 bg-orangePrimary text-black border-solid border-black w-1 h-1 p-6 lg:w-4 lg:h-4 lg:p-10 flex items-center justify-center font-bold mx-2">
            <span className='text-4xl'>{index}</span>
        </div>  
        <div>
            <p className='text-2xl md:text-3xl 2xl:text-[3.125rem] font-bold text-orangePrimary whitespace-nowrap lg:mb-3 tracking-wider'>{title}</p>
            <p className='text-sm md:text-md 2xl:text-xl'>{desc}</p>
        </div>  
    </li>    
  )
}

const Steps = () => {    
    const t = useTranslations('home.steps');    
    const locale = useLocale();
    const messages:any = useMessages();
    const business = Object.keys(messages.home.steps.business)     
    const worker = Object.keys(messages.home.steps.worker)      
    let src = locale === 'en' ? BodyImg : BodyImgEs

    return (
    <>
        <div className='bg-black rounded-[30px]  mb-12 mx-auto my-[-25%] w-[90%]'>
            <Image
                src={src}
                alt='image'
            />
        </div>
        <div className='w-full md:w-[90%] lg:w-[95%] xl:w-[80%] m-auto max-h-80vh px-2 pb-3'>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className='flex flex-col items-center lg:inline-block'>
                    <p className='text-sm md:text-lg lg:text-xl font-bold mx-2 mb-6 lg:mb-12 uppercase'>{ t('stepsBusiness')}</p>
                    <ul className='w-full lg:w-fit'>
                        {business.map(key =>
                            <Step index={t(`business.${key}.index`)} title={t(`business.${key}.title`)} desc={t(`business.${key}.desc`)} key={key} />
                        )}
                    </ul>
                </div>
                <div className='flex flex-col items-center lg:inline-block lg:ml-5'>
                    <p className='text-center lg:text-end text-sm md:text-lg lg:text-xl  font-bold lg:mx-2 mb-6 lg:mb-12 uppercase'>{ t('stepsWorker')}</p>
                    <ul className='w-full lg:w-fit lg:self-end'>   
                        {worker.map(key =>
                            <Step index={t(`worker.${key}.index`)} title={t(`worker.${key}.title`)} desc={t(`worker.${key}.desc`)} key={key} />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Steps