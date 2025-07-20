"use client";
import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const ServicesList = ({
    servicesItems = []
}) => {
  return (
    <div className='w-full h-[1250px] flex px-4 relative gap-32 items-center'>
        <Image
            src={"/images/background/service-bg.png"}
            width={2000}
            height={2000}
            className='w-full h-full absolute top-0 left-0 object-cover'
            alt='service background'
        />
        <div className='flex flex-col w-[500px] items-center justify-center gap-32 z-10'>
            <div className="relative inline-block font-rBold ms-32">
                {/* Shadow Layer */}
                <h2
                    className="absolute top-0 left-0 text-[74px] text-transparent"
                    style={{
                        textShadow: '-8px 10px 10px #839C1D',
                        fontWeight: 600,
                        zIndex: 0,
                    }}
                >
                    Start your transformation today at affordable prices.
                </h2>


                {/* Gradient Text Layer */}
                <h2
                    className="relative text-[74px]"
                    style={{
                        background: 'linear-gradient(180deg, #FFE661 0%, #F0CA00 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        fontWeight: 600,
                        zIndex: 1,
                    }}
                >
                    Start your transformation today at affordable prices.
                </h2>
            </div>
            <PrimaryButton
                text={"Start Booking"}
                id={"start-booking"}
                name={"start-booking"}
                bgColor={"bg-[#282828]/[.88]"}
                boxShadow={"shadow-[0_4px_4px_rgba(131,156,29,1)]"}
            />
        </div>
        <div className='bg-black/[.54] rounded-[40px] text-white p-10 z-10 h-[980px] w-[1100px]'>
            <div className='grid grid-cols-3 font-iBold text-[42px] mb-10'>
                <p>Services</p>
                <p>Price</p>
                <p>Duration</p>
            </div>
            <div className='flex flex-col gap-20'>
                {servicesItems.length > 0 
                    && servicesItems.map((service, index) => {
                        return <div 
                            key={index}
                            className='grid grid-cols-3 font-ixlItalic text-[38px]'
                        >
                            <p>{service.title}</p>
                            <p>{service.price}</p>
                            <p>{service.duration}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ServicesList
