import React from 'react'

const SilverPackageCard = ({
    packageTitle,
    packageItems = [],
    packageDescription,
    packagePrice
}) => {
  return (
    <div 
        className='text-black flex flex-col items-center justify-center w-[500px] h-[780px] gap-10'
        style={{
            background: "radial-gradient(50% 50% at 50% 50%, #E8DDDD 0%, #EEEEEE 14%, #FFFFFF 47%, #F7F7F7 65%, #E0E0E0 100%)"
        }}
    >   
        <h3 className='font-isBold text-[32px] text-black'>
            {packageTitle}
        </h3>
        {packageItems.length > 0 ? 
            <ul className='flex flex-col w-[70%] h-fit gap-5 list-disc p-5'>
                {packageItems.map((item, index) => {
                        return <li
                            key={index}
                            className='text-black font-iRegular text-[28px]'
                        >
                            {item.label}
                        </li>
                    })
                }
            </ul> : null
        
        }
        <p className='text-black font-iRegular text-[20px] w-[60%] text-wrap'>
            {packageDescription}
        </p>

        <p className='w-full text-center text-black font-ixLight text-[40px]'>
            {packagePrice}
        </p>
    </div>
  )
}

export default SilverPackageCard