import React from 'react'

const PrimaryButton = ({
    text,
    name,
    id,
    handleClick = null,
    customClass,
    textColor,
    textSize,
    textFont,
    bgColor,
    borderColor,
    boxShadow
}) => {
  return (
    <button
        type='button'
        id={id}
        name={name}
        className={`${customClass ? customClass : "w-fit h-fit px-8 py-2 rounded-[10px]"}
            ${textColor ? textColor : "text-white"} ${textSize ? textSize : "text-[24px]"} 
            ${textFont ? textFont : "font-rLight"} ${bgColor ? bgColor : "bg-black"} cursor-pointer
            ${borderColor} ${boxShadow}
        `}
        onClick={handleClick ? handleClick : () => console.log("Button Clicked! No Function....")}
    >
        {text}
    </button>
  )
}

export default PrimaryButton