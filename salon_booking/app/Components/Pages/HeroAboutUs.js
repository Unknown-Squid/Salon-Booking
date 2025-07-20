import Image from 'next/image'
import React from 'react'

const HeroAboutUs = () => {
  return (
    <div 
        className='h-[800px] w-[full] bg-white flex items-center relative'
    >
        <div className='w-[40%] h-full flex flex-col justify-center items-center z-10 relative'>

            <div className="relative inline-block font-rBold">
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
            
            <div className='w-full h-fit flex flex-col ga-3 justify-center items-center absolute bottom-[25%] left-0'>
                <h4 className='text-[#FF00C3] text-[38px] font-rRegular'>Where Beauty Begins</h4>
                <p className='text-black text-[22px] font-rLight'>“Another Day, Another Slay”</p>
            </div>

        </div>

        <Image
            src={"/images/background/hero-bg.png"}
            width={2000}
            height={2000}
            className='w-[80%] h-full absolute top-0 left-0'
            alt='hero background'
        />

        <div className='absolute bottom-[5%] right-[8%] bg-[#070707]/[.45] rounded-tl-[200px] 
            rounded-br-[200px] h-[650px] w-[820px] flex justify-center items-center'
        >
                    <p className='w-[85%] text-wrap font-isBold text-[#FCFCFC] text-[36px]'>
                        Our salon vision is to empower confidence and self-expression through exceptional beauty services. 
                        <br/><br/>
                        We’re more than just a salon we’re a space where creativity, care, and style come together to make 
                        every guest feel seen, celebrated, and confident in their own skin.
                    </p>
        </div>
        
        <div className='absolute bottom-[-10%] left-0 bg-black/[.2] rounded-t-[60px] h-[248px] w-full'>
        </div>
    </div>

  )
}

export default HeroAboutUs