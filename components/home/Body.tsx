import React from 'react'
import Steps from './components/Steps.tsx'
import Image from 'next/image';
import bgImg from '../../public/workers.webp';

function Body() {
  return (    
    <section className='w-screen h-fit lg:p-0 bg-whitePrimary'>          
        <div className="w-full">
            <Image
              src={bgImg}
              alt='bg'   
              quality={50}
              priority={true}
            />
        </div >
        <Steps />
        <div className='bg-white mb-[-20px] w-fit px-8 py-2 mx-auto rounded-full shadow-xl z-2  md:px-20 md:py-3 relative md:mb-[-30px] z-10 border-2 '>
            <p className=' text-sm md:text-xl lg:text-2xl xl:text-[2rem] font-bold '>We handle insurances, payments and liability.</p>
        </div> 
    </section>
  )
}

export default Body