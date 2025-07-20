import React from 'react'
import SilverPackageCard from '../Cards/SilverPackageCard'
import PremiumPackageCard from '../Cards/PremiumPackageCard'

const SalonPackages = () => {
  
  const silverPackageItems = [
    {label: "Haircut + Blow-dry"},
    {label: "Basic Hair Treatment"},
    {label: "Manicure or Pedicure"},
    {label: "Eyebrow Shaping"},
    {label: "Light Facial Cleanse"}
  ]

  const premiumPackageItems = [
    {label: "Haircut + Styling (Iron/Curl/Blowout)"},
    {label: "Deep Hair Spa Treatment or Color Retouch"},
    {label: "Manicure & Pedicure with Gel Polish"},
    {label: "Full Facial Treatment (with Mask & Massage)"},
    {label: "Back Massage (15–30 mins)"},
    {label: "Eyelash Lift or Tint"}
  ]

  return (
    <div className='w-full min-h-[1300px] h-fit flex flex-col gap-10 items-center'>
        <div className='w-fit h-fit flex relative'>
            <p className='font-rBold text-[32px] text-black mt-20 mb-12'>
                Salon Packages
            </p>
            <div className='rounded-[25px] py-1 px-6 font-ixLight text-black text-[20px] bg-[#FFC800] w-fit h-fit underline absolute top-10 right-[-40%]'>
                popular
                <div className='w-full h-full relative bg-transparent'>
                    <div className='h-[25px] w-[2px] bg-black absolute top-0 left-[-10px]'></div>
                </div>
            </div>
        </div>
        <div className='flex w-full h-fit justify-center items-center gap-5'>
            <SilverPackageCard
                packageTitle={"Basic Beauty Package"}
                packageItems={silverPackageItems}
                packageDescription={"Great for weekly or monthly self-care routines."}
                packagePrice={"₱ 999"}
            />
            <PremiumPackageCard
                packageTitle={" Premium Glam Package"}
                packageItems={premiumPackageItems}
                packageDescription={"Free consultation with a stylist and complimentary refreshment."}
                packagePrice={"₱ 2,499"}
            />
        </div>
    </div>
  )
}

export default SalonPackages
