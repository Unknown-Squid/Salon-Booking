"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const HeroBooking = () => {
  return (
    <div 
        className='h-[800px] w-[full] bg-white flex items-center relative'
    >
        {/* Background Image - Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
              src={"/images/background/hero-bg.png"}
              width={2000}
              height={2000}
              className='w-full h-full'
              alt='hero background'
          />
        </motion.div>

        {/* Content Elements - Separate Animation */}
        <div className='w-[40%] h-full flex flex-col items-center z-10 relative'>
            <motion.div 
              className="relative inline-block font-rBold mt-54"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                {/* Shadow Layer */}
                <h1
                    className="absolute top-0 left-0 text-[84px] text-transparent"
                    style={{
                        textShadow: '-8px 10px 10px #839C1D',
                        fontWeight: 600,
                        zIndex: 0,
                    }}
                >
                    SALON BOOKING
                </h1>

                {/* Gradient Text Layer */}
                <h1
                    className="relative text-[84px]"
                    style={{
                        background: 'linear-gradient(90deg, #5A4C00 0%, #C0A200 65.87%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        fontWeight: 600,
                        zIndex: 1,
                    }}
                >
                    SALON BOOKING
                </h1>
            </motion.div>
            
            <motion.div 
              className='w-full h-fit flex flex-col ga-3 justify-center items-center absolute bottom-[45%] left-0'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
                <h4 className='text-[#FF00C3] text-[38px] font-rRegular'>Where Beauty Begins</h4>
                <p className='text-black text-[22px] font-rLight'>"Another Day, Another Slay"</p>
            </motion.div>
        </div>
        
        <motion.div 
          className='absolute bottom-0 left-0 bg-black/[.2] rounded-t-[60px] h-[248px] w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
        </motion.div>
    </div>
  )
}

export default HeroBooking
