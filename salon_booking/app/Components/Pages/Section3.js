"use client";
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const Section3 = () => {
  return (
    <div className='w-full h-[1000px] bg-white flex flex-col items-center text-black font-rMedium gap-5'>
        <p className='text-[36px] mt-20'>
            You're one step closer to a change. 
        </p>
        <p className='text-[36px]'>
            Book your appointment now!
        </p>

        <div className='w-[80%] h-[600px] bg-white border border-black mt-5 mb-2'>

        </div>

        <PrimaryButton
            text={"Start Booking"}
            id={"start-booking"}
            name={"start-booking"}
            bgColor={"bg-[#B2B2B2]"}
            textColor={"text-black"}
        />
      
    </div>
  )
}

export default Section3
