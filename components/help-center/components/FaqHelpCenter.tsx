'use client'
import {useState} from 'react'
import { BiSolidRightArrow } from 'react-icons/bi';
import TableCancellation from './TableCancellation';

export default function Faq( {title, desc}: {title:string, desc:string}) {
    const [arrow, setArrow] = useState(false);
    const handleRotate = () => setArrow(!arrow);
    const rotate = arrow ? "rotate(90deg)" : "rotate(0)"    
    const descArr = desc.split('*br');    
        
    return (
        <>
            <li className='flex items-center mb-4' key={title}>
                <BiSolidRightArrow className="mr-6 text-orangePrimary cursor-pointer flex-shrink-0" style={{ transform: rotate, transition: "all 0.2s linear"}} onClick={handleRotate}/>
                <p className={`cursor-pointer hover:text-orangePrimary ${arrow && "text-orangePrimary"}`}  onClick={handleRotate}>{title}</p>
            </li>
            <li key={desc}>              
                {arrow && (
                    descArr.map((text:string,index:number) => (
                        <>
                            <p className='text-sm lg:text-lg mb-4 lg:pr-20 text-justify' key={index}>{text}</p>
                            { title === "What happens if I cancel the shift I proposed?" || title === "¿Qué sucede si cancelo el turno que propuse?" &&
                                <TableCancellation/>
                            }
                        </>
                    ))                    
                )}  
            </li>
        </>
    )
}