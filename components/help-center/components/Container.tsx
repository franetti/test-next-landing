'use client'
import FaqContainer from './FaqContainer'
import { useMessages } from 'next-intl';
import {} from 'next-intl';

export default function Container() {    
  const messages:any = useMessages();
  const titlesFaqsArr = Object.keys(messages.helpCenter) 

  return (
    <div className='w-screen bg-whiteGradient flex flex-col items-center justify-center pb-10 px-2 md:px-20 xl:px-40'>
      <div className='flex w-full' >
        <ul className=' w-full flex flex-col text-2xl' >
          {titlesFaqsArr.map(key => {
              let questionsKeys = Object.keys(messages.helpCenter[key])              
              return <FaqContainer title={key} questionsKeys={questionsKeys} key={key} />              
          })}                           
        </ul>
      </div>
    </div>
  )
}