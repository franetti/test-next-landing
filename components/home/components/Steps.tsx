import React from 'react'
import { InfoType } from '../../../const/index.ts'
import { StepInfo } from '../../../const/index.ts'
import Image from 'next/image'
import BodyImg from '../../../public/bodyImg.svg'

type Props = InfoType & {    
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
            <p className=' text-3xl md:text-3xl 2xl:text-[3.125rem] font-bold text-orangePrimary whitespace-nowrap lg:mb-3 tracking-wider'>{title}</p>
            <p className='text-sm md:text-md 2xl:text-xl'>{desc}</p>
        </div>  
    </li>    
  )
}

const Steps = () => {
    return (
    <>
        <div className='bg-black rounded-[30px]  mb-12 mx-auto my-[-25%] w-[90%]'>
            <Image
                src={BodyImg}
                alt='image'
            />
        </div>
        <div className='w-full md:w-[90%] lg:w-[95%] xl:w-[80%] m-auto max-h-80vh px-2 pb-3'>
            <div className="flex flex-col lg:flex-row justify-between">
                <div>
                    <p className='text-sm md:text-lg lg:text-xl font-bold mx-2 mb-12 uppercase'>3 steps for businesses</p>
                    <ul className='w-fit'>
                        {StepInfo.business.map(e =>
                            <Step index={e.index} title={e.title} desc={e.desc} key={e.title} />
                        )}
                    </ul>
                </div>
                <div className='flex flex-col ml-5'>
                    <p className='text-sm md:text-lg lg:text-xl text-end font-bold mx-2 mb-12 uppercase'>3 steps for self-workers</p>
                    <ul className='w-fit self-end'>   
                        {StepInfo.worker.map(e =>
                            <Step index={e.index} title={e.title} desc={e.desc} reverse={true} key={e.title}/>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Steps