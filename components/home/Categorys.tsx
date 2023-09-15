import React from 'react';
import Card from './components/card';



const CategoryBody = () => {
 

  const CATEGORIES = [
    { description: "Hotel & condos", image: "HotelSVG.svg" },
    { description: "Food & beverage", image: "FoodSVG.svg" },
    { description: "Warehousing", image: "WarehousingSVG.svg" },
    { description: "Stadium & events", image: "EventsSVG.svg" },
  ];
 
  return (
    <section className='w-screen flex justify-start bg-gradient-to-b from-lightBlueGradient to-whiteGradient py-12 xl:py-24 px-2'>
      <div className="w-full flex flex-wrap justify-center">
      {CATEGORIES.map((category,index) => (
       <Card image={category.image} description={category.description} key={index} ></Card>
      ))}
    </div>
    </section>
    
  );
};

export default CategoryBody;
