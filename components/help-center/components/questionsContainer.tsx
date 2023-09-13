'use client'
import {useState } from 'react'
import { HelpCenter, HelpCenterType } from '../../../const/helpcenter'
import Faq from '../../layout/components/Faq'
import { BiSolidRightArrow } from 'react-icons/bi';

function Questions({ title, questions }: HelpCenterType) {
  const [arrow, setArrow] = useState(false);
  const handleRotate = () => setArrow(!arrow);
  const rotate = arrow ? "rotate(90deg)" : "rotate(0)"
  
  return (
    <li className='border-2 my-3 md-0 md:mx-2 rounded-md shadow-md w-full'>
      <span className='flex items-center p-5'>
        <BiSolidRightArrow className="mr-6 text-orange-500 cursor-pointer flex-shrink-0" style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={handleRotate} />
        <h3 className='cursor-pointer' onClick={handleRotate}>{title}</h3>
      </span>      
      <ul className='ml-12 text-xl' >
        {arrow && questions.map(x => (
          <Faq title={x.question} desc={x.answer} key={x.question} />  
        ))}
      </ul>
    </li>
  )
}

export default function QuestionsContainer() {
  return (
    <div className='w-screen bg-whiteGradient flex flex-col items-center justify-center pb-10 px-2 md:px-20 xl:px-40'>
      <div className='flex w-full' >
        <ul className=' w-full flex flex-col text-2xl' >
          {HelpCenter.map(x => (
            <Questions title={x.title} questions={x.questions} key={x.title} />
          ))}                           
        </ul>
      </div>
    </div>
  )
}