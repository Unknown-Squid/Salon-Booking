import React from 'react'

const SelectField = ({
    selectLabel,
    labelTextColor,
    selectValue,
    selectId,
    selectName,
    customClass,
    selectRadius,
    selectBg,
    selectBorder,
    selectWidth,
    selectHeight,
    selectTextSize,
    selectTextFont,
    selectTextColor,
    selectItems = [],
    handleChange,
    labelTextSize
}) => {
  return (
    <div className='flex flex-col gap-4'>
        <label
          htmlFor={selectId}
          className={`${selectTextFont ? selectTextFont : "font-iRegular"} ${labelTextSize ? labelTextSize : "text-[24px]"}
                ${labelTextColor ? labelTextColor : "text-black"}
            `}
        >
            {selectLabel}
        </label>
        <select
            type="text"
            value={selectValue}
            id={selectId}
            name={selectName}
            onChange={handleChange}
            className={`${customClass} ${selectRadius ? selectRadius : "rounded-[15px]"} ${selectBg ? selectBg :  "bg-transparent"}
                  ${selectBorder ? selectBorder :  "border border-[#D9D9D9]"} ${selectWidth ? selectWidth : "w-full"} 
                  ${selectHeight ? selectHeight : "h-full"} ${selectTextSize ? selectTextSize : "text-[24px]"} 
                  ${selectTextFont ? selectTextFont : "font-iRegular"}  
                  ${selectTextColor ? selectTextColor : "text-black"} p-4 px-5
              `}
        >
            <option value=""> -- {selectLabel} -- </option>
            {selectItems 
                && selectItems.map((item, index) => {
                    return <option key={index} value={item.value}>
                        {item.text}
                    </option>
                })
            }
        </select>
    </div>
  )
}

export default SelectField

