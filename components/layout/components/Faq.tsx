'use client'
import { useTranslations, useLocale } from 'next-intl';
import {useState} from 'react'
import { BiSolidRightArrow } from 'react-icons/bi';
type Props = {
    keyValue: string,
    messages:any
}

export const Faq = ( {keyValue, messages}:Props ) => {
    const [arrow, setArrow] = useState(false);
    const handleRotate = () => setArrow(!arrow);
    const rotate = arrow ? "rotate(90deg)" : "rotate(0)"    

    const t = useTranslations(`home.footer.faqs.${keyValue}`);   
    const contentKeysArr = Object.keys(messages.home.footer.faqs[keyValue].content)        
        
    return (
        <>
            <li className='flex items-center mb-4'>
                <BiSolidRightArrow className="mr-6 text-orangePrimary cursor-pointer flex-shrink-0" style={{ transform: rotate, transition: "all 0.2s linear"}} onClick={handleRotate}/>
                <p className='cursor-pointer' onClick={handleRotate}>{t('title')}</p>
            </li>
            <li>              
                {arrow && (
                    contentKeysArr.map((content, index) => (
                        <>
                            <p className='text-sm lg:text-lg mb-4 lg:pr-20 underline underline-offset-4' key={index}>{t(`content.${content}.subtitle`)}</p>
                            <p className='text-sm lg:text-lg mb-4 lg:pr-20 text-justify' key={index}>{t(`content.${content}.desc`)}</p>
                        </>
                    ))                    
                )}  
            </li>
        </>
    )
}