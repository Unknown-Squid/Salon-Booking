
import React from 'react'

const TimeInputField = ({
    inputLabel,
    labelTextColor,
    inputValue,
    inputId,
    inputName,
    customClass,
    inputRadius,
    inputBg,
    inputBorder,
    inputWidth,
    inputHeight,
    inputTextSize,
    inputTextFont,
    inputTextColor,
    handleChange,

    labelTextSize
}) => {
  return (
    <div className='flex flex-col gap-4'>
        <label
          htmlFor={inputId}
          className={`${inputTextFont ? inputTextFont : "font-iRegular"} ${labelTextSize ? labelTextSize : "text-[24px]"}
                ${labelTextColor ? labelTextColor : "text-black"}
            `}
        >
            {inputLabel}
        </label>
        <input
            type="time"
            value={inputValue}
            id={inputId}
            name={inputName}
            onChange={handleChange}
            className={`${customClass} ${inputRadius ? inputRadius : "rounded-[15px]"} ${inputBg ? inputBg :  "bg-transparent"}
                  ${inputBorder ? inputBorder :  "border border-[#D9D9D9]"} ${inputWidth ? inputWidth : "w-full"} 
                  ${inputHeight ? inputHeight : "h-full"} ${inputTextSize ? inputTextSize : "text-[24px]"} 
                  ${inputTextFont ? inputTextFont : "font-iRegular"}  
                  ${inputTextColor ? inputTextColor : "text-black"} p-4
              `}
        />
    </div>
  )
}

export default TimeInputField
