'use client'
import React from 'react';
import Card from './components/card';
import { useLocale, useMessages, useTranslations } from 'next-intl';

const CategoryBody =  () => {
    const t = useTranslations('home.categories');         
    const messages:any = useMessages();        
    const categories = Object.keys(messages.home.categories)    
 
  return (
    <section className='w-screen flex justify-start bg-gradient-to-b from-lightBlueGradient to-whiteGradient py-12 xl:py-24 px-2'>
      <div className="w-full flex flex-wrap justify-center">
      {categories.map((key,index) => (
       <Card image={t(`${key}.image`)} description={t(`${key}.description`)} key={index} ></Card>
      ))}
    </div>
    </section>
    
  );
};

export default CategoryBody;
