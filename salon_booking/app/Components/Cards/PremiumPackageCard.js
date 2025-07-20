import React from 'react'

const PremiumPackageCard = ({
    packageTitle,
    packageItems = [],
    packageDescription,
    packagePrice
}) => {
  return (
    <div 
        className='text-black flex flex-col items-center justify-center w-[650px] h-[980px] gap-10 border-2 border-black shadow-[0_4px_40px_10px_rgba(0,0,0,0.5)]'
        style={{
            background: "radial-gradient(50% 50% at 50% 50%, #D9C34A 0%, #DCBD18 13.61%, #FFD807 47.17%, #FFD90D 82.7%, #D3B618 100%)"
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
            <span className='text-red-500 me-2'>Bonus:</span>{packageDescription}
        </p>

        <p className='w-full text-center text-black font-ixLight text-[40px]'>
            {packagePrice}
        </p>
    </div>
  )
}

export default PremiumPackageCard