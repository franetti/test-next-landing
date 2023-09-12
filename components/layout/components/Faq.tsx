'use client'
import {useState} from 'react'
import { BiSolidRightArrow } from 'react-icons/bi';
type Props = {
    title: string,
    desc:string
}

function Faq( {title, desc}:Props ) {
    const [arrow, setArrow] = useState(false);
    const handleRotate = () => setArrow(!arrow);
    const rotate = arrow ? "rotate(90deg)" : "rotate(0)"

    return (
        <>
            <li className='flex items-center mb-4'>
                <BiSolidRightArrow className="mr-6 text-orange-500" style={{ transform: rotate, transition: "all 0.2s linear"}} onClick={handleRotate}/>
                <p onClick={handleRotate}>{title}</p>
            </li>
            <li>              
                {arrow && (
                    <p className='text-sm lg:text-lg mb-4 lg:pr-20'>{desc}</p>
                )}  
            </li>
        </>
    )
}

export default Faq