"use client";
import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const Section1 = () => {
  return (
    <div 
        className='w-full h-[1280px] flex flex-col'
        style={{
            background: `conic-gradient(from 112.15deg at 50% 50%, rgba(126, 126, 126, 0.76) 0deg,
             rgba(238, 247, 255, 0.76) 84.83deg, #939393 181.75deg, 
             #EEF7FF 295.99deg, rgba(126, 126, 126, 0.76) 360deg)`,
        }}
    >
        <div className='w-full h-[58%] flex gap-20'>
            <div className='flex-grow h-full flex flex-col items-end justify-center gap-10 font-iMedium text-black text-[42px] mt-10'>
                <p className='me-40'>We believe beauty is all about confidence.</p>
                <p>From hair to nails and everything in between.</p>
                
            </div>
            <div className='w-fit h-full flex items-end justify-end me-24'>
                <Image
                    src={'/images/pages/home/section1-image.png'}
                    width={500}
                    height={500}
                    className='w-fit h-fit rounded-[40px]'
                    alt='section1 image'
                />
            </div>
        </div>
        <div className='w-full h-[40%] flex'>
            <div className='w-fit h-full flex  justify-end ms-40'>
                <Image
                    src={'/images/pages/home/section1-image2.png'}
                    width={500}
                    height={500}
                    className='w-fit h-full rounded-[40px]'
                    alt='section1 image'
                />
            </div>
            <div className='flex-grow h-full flex flex-col items-start justify-center gap-10 font-iMedium text-black text-[38px] mt-10'>
                <p className='ms-40 text-wrap w-[80%]'>Our expert team is here to help you look and feel your best.</p>
                <p className='ms-16 text-wrap w-[60%]'>Step in, relax, and let us take care of the rest.</p>
                <div className='w-full h-fit flex justify-center'>
                    <PrimaryButton
                        text={"Book Now"}
                        id={"book-now"}
                        name={"book-now"}
                        bgColor={"bg-[#BF6C00]"}
                    />
                </div>
            </div>
        </div>
      
    </div>

  )
}

export default Section1