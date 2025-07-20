import Image from 'next/image'
import React from 'react'

const HeroBooking = () => {
  return (
    <div 
        className='h-[800px] w-[full] bg-white flex items-center relative'
    >
        <div className='w-[40%] h-full flex flex-col items-center z-10 relative'>

            <div className="relative inline-block font-rBold mt-54">
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
            </div>
            
            <div className='w-full h-fit flex flex-col ga-3 justify-center items-center absolute bottom-[45%] left-0'>
                <h4 className='text-[#FF00C3] text-[38px] font-rRegular'>Where Beauty Begins</h4>
                <p className='text-black text-[22px] font-rLight'>“Another Day, Another Slay”</p>
            </div>

        </div>

        <Image
            src={"/images/background/hero-bg.png"}
            width={2000}
            height={2000}
            className='w-full h-full absolute top-0 left-0'
            alt='hero background'
        />
        
        <div className='absolute bottom-0 left-0 bg-black/[.2] rounded-t-[60px] h-[248px] w-full'>
        </div>
    </div>
  )
}

export default HeroBooking
