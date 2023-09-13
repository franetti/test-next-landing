//import WokersImg from '../../public/workers.png'
import React from 'react'
import Steps from './components/Steps.tsx'
import Image from 'next/image';
import bgImg from '../../public/workers.png';

function Body() {
  return (    
    <section className='w-full h-fit lg:p-0'>          
        <div className="w-full">
            <Image
                src={bgImg}
                alt='bg'      
            />
        </div >
        <Steps />
        <div className='bg-white mb-[-10px] w-fit px-5 mx-auto rounded-full shadow-xl z-2 md:px-24 md:py-5 relative md:mb-[-40px] z-10 border-2 '>
            <p className='text-sm md:text-2xl lg:text-3xl xl:text-[2.5rem] font-bold '>We handle insurances, payments and liability.</p>
        </div> 
    </section>
  )
}

export default Body