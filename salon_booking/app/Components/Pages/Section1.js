"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../Buttons/PrimaryButton';

const Section1 = () => {
  return (
    <div 
        className='w-full h-[1280px] flex flex-col relative'
    >
        {/* Background - Fade In Only */}
        <motion.div
          className='absolute inset-0'
          style={{
              background: `conic-gradient(from 112.15deg at 50% 50%, rgba(126, 126, 126, 0.76) 0deg,
               rgba(238, 247, 255, 0.76) 84.83deg, #939393 181.75deg, 
               #EEF7FF 295.99deg, rgba(126, 126, 126, 0.76) 360deg)`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Content Elements - Animate Separately */}
        <div className='w-full h-[58%] flex gap-20 relative z-10'>
            <motion.div 
              className='flex-grow h-full flex flex-col items-end justify-center gap-10 font-iMedium text-black text-[42px] mt-10'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <p className='me-40'>We believe beauty is all about confidence.</p>
                <p>From hair to nails and everything in between.</p>
            </motion.div>
            <motion.div 
              className='w-fit h-full flex items-end justify-end me-24'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                <Image
                    src={'/images/pages/home/section1-image.png'}
                    width={500}
                    height={500}
                    className='w-fit h-fit rounded-[40px]'
                    alt='section1 image'
                />
            </motion.div>
        </div>
        <div className='w-full h-[40%] flex relative z-10'>
            <motion.div 
              className='w-fit h-full flex  justify-end ms-40'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <Image
                    src={'/images/pages/home/section1-image2.png'}
                    width={500}
                    height={500}
                    className='w-fit h-full rounded-[40px]'
                    alt='section1 image'
                />
            </motion.div>
            <motion.div 
              className='flex-grow h-full flex flex-col items-start justify-center gap-10 font-iMedium text-black text-[38px] mt-10'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                <p className='ms-40 text-wrap w-[80%]'>Our expert team is here to help you look and feel your best.</p>
                <p className='ms-16 text-wrap w-[60%]'>Step in, relax, and let us take care of the rest.</p>
                <motion.div 
                  className='w-full h-fit flex justify-center'
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                    <PrimaryButton
                        text={"Book Now"}
                        id={"book-now"}
                        name={"book-now"}
                        bgColor={"bg-[#BF6C00]"}
                    />
                </motion.div>
            </motion.div>
        </div>
      
    </div>

  )
}

export default Section1