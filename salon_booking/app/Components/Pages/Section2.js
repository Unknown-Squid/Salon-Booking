"use client";
import React, { useState } from 'react';
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
    <div className={`${isFade ? "bg-[#757575]/[0.4]" : "bg-[#757575]"} w-full h-[1000px] flex flex-col relative z-10`}>
        <p className='text-white font-rMedium text-[42px] mt-32 w-full text-center'>What We Offer</p>

        <div className='flex gap-20 w-full h-fit items-center justify-center mt-5'>
            {cardOfferItems.length > 0 
            && (
                cardOfferItems.map((card, index) => {
                    const cardCustomRadius = index == 0 ? "rounded-tl-[50px] rounded-bl-[50px] rounded-tr-[15px] rounded-br-[15px]" : 
                                             index == 2 ? "rounded-tr-[50px] rounded-br-[50px] rounded-tl-[15px] rounded-bl-[15px]" : null;
                    const cardMarginTop = index == 1 ? null : "mt-[150px]";
                    const cardGlassCoverOpacity = index == 1 ? "opacity-[0.3]" : "opacity-[0.6]";
                    const cardTitleOpacity = index == 1 ? null : "opacity-[0.3]";
                    return <OfferCard
                        key={index}
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
                })
            )}
        </div>

        <div className='w-full h-fit flex justify-center'>
            <PrimaryButton
                text={"View More"}
                id={"view-more"}
                name={"view-more"}
                bgColor={"bg-[#282828]/[.86]"}
            />
        </div>

        {/* <div className='h-[90%] w-[800px] rounded-[40%] bg-black/[.8] ms-[-300px] absolute top-20 left-0'></div>
        <div className='h-[90%] w-[800px] rounded-[40%] bg-black/[.8] me-[-300px] absolute top-20 right-0'></div> */}
    </div>
  )
}

export default Section2