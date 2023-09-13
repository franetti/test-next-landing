import React from 'react'
import QuestionsContainer from './components/questionsContainer'

export default function HelpCenter() {
    return (
    <>
        <div className='w-screen h-full flex justify-center items-center bg-gradient-to-b from-lightBlueGradient to-whiteGradient p-6 pt-28 md:py-24 md:px-20 xl:px-40'>        
            <h1 className='text-7xl font-bold'>Help Center</h1>                
        </div>
        <QuestionsContainer />
    </>
  )
} 