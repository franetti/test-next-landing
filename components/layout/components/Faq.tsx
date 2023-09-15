'use client'
import {useState} from 'react'
import { BiSolidRightArrow } from 'react-icons/bi';
type Props = {
    title: string,
    content: {
        subtitle: string,
        desc:string
    }[]
}

export default function Faq( {title, content}:Props ) {
    const [arrow, setArrow] = useState(false);
    const handleRotate = () => setArrow(!arrow);
    const rotate = arrow ? "rotate(90deg)" : "rotate(0)"    
    
    return (
        <>
            <li className='flex items-center mb-4'>
                <BiSolidRightArrow className="mr-6 text-orangePrimary cursor-pointer flex-shrink-0" style={{ transform: rotate, transition: "all 0.2s linear"}} onClick={handleRotate}/>
                <p className='cursor-pointer' onClick={handleRotate}>{title}</p>
            </li>
            <li>              
                {arrow && (
                    content.map((contentText, index) => (
                        <>
                            <p className='text-sm lg:text-lg mb-4 lg:pr-20 underline underline-offset-4' key={index}>{contentText.subtitle}</p>
                            <p className='text-sm lg:text-lg mb-4 lg:pr-20 text-justify' key={index}>{contentText.desc}</p>
                        </>
                    ))                    
                )}  
            </li>
        </>
    )
}