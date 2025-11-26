"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OfferCard from '../Cards/OfferCard';
import PrimaryButton from '../Buttons/PrimaryButton';

const Section2 = ({
    isFade = false
}) => {

  const [cardOfferItems, setCardOfferItems] = useState([
    {
        cardImgSrc: "/images/pages/home/section2-image.png",
        cardTitle: "Nail Elegance",
    },
    {
        cardImgSrc: "/images/pages/home/section2-image2.png",
        cardTitle: "Hair Makeover Magic",
    },
    {
        cardImgSrc: "/images/pages/home/section2-image3.png",
        cardTitle: "Glow & Glam Facial",
    }
  ])

  const handleCardClick = (clickedIndex) => {
    // Only swap if clicked index is NOT center (index 1)
    if (clickedIndex !== 1) {
        setCardOfferItems((prevItems) => {
        const newItems = [...prevItems];
        // Swap clicked index with center (index 1)
        [newItems[1], newItems[clickedIndex]] = [newItems[clickedIndex], newItems[1]];
            return newItems;
        });
    }
  };

  return (
    <div className='w-full h-[1000px] flex flex-col relative z-10'>
        {/* Background - Fade In Only */}
        <motion.div
          className={`absolute inset-0 ${isFade ? "bg-[#757575]/[0.4]" : "bg-[#757575]"}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Content Elements - Animate Separately */}
        <motion.p 
          className='text-white font-rMedium text-[42px] mt-32 w-full text-center relative z-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          What We Offer
        </motion.p>

        <motion.div 
          className='flex gap-20 w-full h-fit items-center justify-center mt-5 relative z-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
            {cardOfferItems.length > 0 
            && (
                cardOfferItems.map((card, index) => {
                    const cardCustomRadius = index == 0 ? "rounded-tl-[50px] rounded-bl-[50px] rounded-tr-[15px] rounded-br-[15px]" : 
                                             index == 2 ? "rounded-tr-[50px] rounded-br-[50px] rounded-tl-[15px] rounded-bl-[15px]" : null;
                    const cardMarginTop = index == 1 ? null : "mt-[150px]";
                    const cardGlassCoverOpacity = index == 1 ? "opacity-[0.3]" : "opacity-[0.6]";
                    const cardTitleOpacity = index == 1 ? null : "opacity-[0.3]";
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                      >
                        <OfferCard
                          handleCardClick={() => handleCardClick(index)}
                          cardHeight={"h-[550px]"}
                          cardWidth={"w-[550px]"}
                          cardImgSrc={card.cardImgSrc}
                          cardImgAlt={"section2 image"}
                          cardCustomRadius={cardCustomRadius}
                          cardMarginTop={cardMarginTop}

                          cardGlassCover={true}
                          cardGlassCoverOpacity={cardGlassCoverOpacity}

                          cardTitle={card.cardTitle}
                          cardTitleSize={"text-[42px]"}
                          cardTitlePosition={"absolute bottom-[-30px] left-0"}
                          cardTitleOpacity={cardTitleOpacity}
                        />
                      </motion.div>
                    );
                })
            )}
        </motion.div>

        <motion.div 
          className='w-full h-fit flex justify-center relative z-10'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
            <PrimaryButton
                text={"View More"}
                id={"view-more"}
                name={"view-more"}
                bgColor={"bg-[#282828]/[.86]"}
            />
        </motion.div>

        {/* <div className='h-[90%] w-[800px] rounded-[40%] bg-black/[.8] ms-[-300px] absolute top-20 left-0'></div>
        <div className='h-[90%] w-[800px] rounded-[40%] bg-black/[.8] me-[-300px] absolute top-20 right-0'></div> */}
    </div>
  )
}

export default Section2