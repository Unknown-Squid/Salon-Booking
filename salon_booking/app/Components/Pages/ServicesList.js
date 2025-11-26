"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../Buttons/PrimaryButton';

const ServicesList = ({
    servicesItems = []
}) => {
  return (
    <div className='w-full min-h-[1250px] flex px-4 relative gap-32 items-start py-20'>
        {/* Background - Fade In Only */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
              src={"/images/background/service-bg.png"}
              width={2000}
              height={2000}
              className='w-full h-full object-cover'
              alt='service background'
          />
        </motion.div>

        {/* Content Elements - Animate Separately */}
        <motion.div 
          className='flex flex-col w-[500px] items-center justify-center gap-32 z-10'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
            <motion.div 
              className="relative inline-block font-rBold ms-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <PrimaryButton
                  text={"Start Booking"}
                  id={"start-booking"}
                  name={"start-booking"}
                  bgColor={"bg-[#282828]/[.88]"}
                  boxShadow={"shadow-[0_4px_4px_rgba(131,156,29,1)]"}
              />
            </motion.div>
        </motion.div>

        <motion.div 
          className='bg-black/[.54] rounded-[40px] text-white p-10 z-10 max-h-[980px] w-[1100px] flex flex-col overflow-hidden'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
            <motion.div 
              className='grid grid-cols-3 font-iBold text-[42px] mb-10 flex-shrink-0'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
                <p>Services</p>
                <p>Price</p>
                <p>Duration</p>
            </motion.div>
            <div className='flex flex-col gap-8 overflow-y-auto pr-2'>
                {servicesItems.length > 0 
                    && servicesItems.map((service, index) => {
                        return (
                          <motion.div 
                            key={index}
                            className='grid grid-cols-3 font-ixlItalic text-[38px] flex-shrink-0'
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.7 + (index * 0.03),
                              ease: "easeOut" 
                            }}
                          >
                              <p className='break-words'>{service.title}</p>
                              <p>{service.price}</p>
                              <p>{service.duration}</p>
                          </motion.div>
                        );
                    })
                }
            </div>
        </motion.div>
    </div>
  )
}

export default ServicesList
