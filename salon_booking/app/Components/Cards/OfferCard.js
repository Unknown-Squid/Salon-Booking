import React from 'react'
import Image from 'next/image'

const OfferCard = ({
    handleCardClick,
    cardHeight,
    cardWidth,
    cardBgColor,
    cardCustomRadius,
    cardMarginTop,
    cardImgSrc,
    cardImgAlt,
    cardGlassCover = false,
    cardGlassCoverColor,
    cardGlassCoverOpacity,
    cardTitle,
    cardTitleColor,
    cardTitleSize,
    cardTitleFont,
    cardTitlePosition,
    cardTitleOpacity
}) => {
  return (
    <div 
        className={`${cardHeight ? cardHeight : "h-[430px]"} ${cardWidth ? cardWidth : "w-[415px]"}
            ${cardCustomRadius ? cardCustomRadius : "rounded-[15px]"} ${cardBgColor ? cardBgColor : "bg-transparent"} 
            ${cardMarginTop ? cardMarginTop : "mt-0"} ${cardTitleOpacity ? null : "shadow-[0_8px_24px_rgba(0,0,0,0.5)]"} relative hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] cursor-grab
        `}
        onClick={handleCardClick}
    >
        <Image
            src={cardImgSrc}
            width={500}
            height={500}
            className={`w-full h-full ${cardCustomRadius ? cardCustomRadius : "rounded-[15px]"}`}
            alt={cardImgAlt}
        />
        {cardGlassCover 
        && (
            <div className={`${cardGlassCoverColor ? cardGlassCoverColor : "bg-black"} 
                    ${cardGlassCoverOpacity ? cardGlassCoverOpacity : "opacity-[0.4]"} 
                    bg-black w-full h-full absolute top-0 left-0 ${cardCustomRadius ? cardCustomRadius : "rounded-[15px]"}
                `}
            >

            </div>
        ) }
        <p className={`${cardTitleColor ? cardTitleColor : "text-white"} ${cardTitleSize ? cardTitleSize : "text-[24px]"}
                ${cardTitleFont ? cardTitleFont : "font-rBold"} ${cardTitlePosition ? cardTitlePosition : "absolute bottom-[-15px] left-0"} 
                ${cardTitleOpacity ? cardTitleOpacity : "opacity-[1]"}
                w-full h-fit text-center
            `}
        >
            {cardTitle}
        </p>
    </div>
  )
}

export default OfferCard
