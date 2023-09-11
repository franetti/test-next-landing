import Image from 'next/image';
import React from 'react';

type Category = {
  description: string
  image:string
 }

 const Card = ({ image, description }:Category) => {
  return (
    <div className="p-4 flex flex-col items-center ml-4 mr-4 ">
      <div className="w-32 h-32 rounded-3xl bg-gray-100 flex items-center justify-center p-4 ">
        <Image  width={154} height={64} src={image} alt={description}  className="object-cover"/>
      </div>
      <p className="font-Poppins text-2xl font-semibold leading-60 tracking-normal text-left mt-4">{description}</p>
    </div>
  );
};

export default Card;