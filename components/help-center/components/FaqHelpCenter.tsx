'use client'
import {useState} from 'react'
import { BiSolidRightArrow } from 'react-icons/bi';
type Props = {
    title: string,
    desc:string
}

export default function Faq( {title, desc}:Props ) {
    const [arrow, setArrow] = useState(false);
    const handleRotate = () => setArrow(!arrow);
    const rotate = arrow ? "rotate(90deg)" : "rotate(0)"
    const descArr = desc.split('<br>');
    
    return (
        <>
            <li className='flex items-center mb-4'>
                <BiSolidRightArrow className="mr-6 text-orangePrimary cursor-pointer flex-shrink-0" style={{ transform: rotate, transition: "all 0.2s linear"}} onClick={handleRotate}/>
                <p className={`cursor-pointer hover:text-orangePrimary ${arrow && "text-orangePrimary"}`}  onClick={handleRotate}>{title}</p>
            </li>
            <li>              
                {arrow && (
                    descArr.map((text,index) => (
                        <p className='text-sm lg:text-lg mb-4 lg:pr-20' key={index}>{text}</p>
                    ))                    
                )}  
            </li>
        </>
    )
}