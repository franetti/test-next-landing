//import WokersImg from '../../public/workers.png'
import React from 'react'
import Steps from './components/Steps.tsx'
import Image from 'next/image';
import bgImg from '../../public/workers.png';

function Body() {
  return (    
    <section className='w-full lg:p-0'>          
        <div className="w-full">
            <Image
                src={bgImg}
                alt='bg'      
            />
        </div >
        <Steps/>
    </section>
  )
}

export default Body