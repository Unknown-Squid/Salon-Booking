import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

const BookingSummaryCard = ({
    name,
    email,
    contactNumber,
    serviceType,
    stylist,
    upgrades,
    date,
    time,
    notes,
    promoCode
}) => {
  return (
    <div className='bg-white h-fit w-full py-4 flex justify-center font-iRegular text-black text-[16px]'>
        <div className='w-[70%] h-[780px] p-16 border border-dashed border-black flex gap-5 rounded-[15px]'>
            <div className='flex flex-col w-1/2'>
                <p>Summary Booking Recipt</p>
                <div className='flex mt-3'>
                    <p className='w-1/2'>Name:</p>
                    <p className='w-1/2'>{name}</p>
                </div>
                <div className='flex'>
                    <p className='w-1/2'>Email:</p>
                    <p className='w-1/2'>{email}</p>
                </div>
                <div className='flex'>
                    <p className='w-1/2'>Contact Number:</p>
                    <p className='w-1/2'>{contactNumber}</p>
                </div>

                <div className='flex mt-3'>
                    <p className='w-1/2'>Service Type:</p>
                    <p className='w-1/2'>{serviceType}</p>
                </div>
                <div className='flex'>
                    <p className='w-1/2'>Stylist:</p>
                    <p className='w-1/2'>{stylist}</p>
                </div>
                <div className='flex'>
                    <p className='w-1/2'>Upgrades:</p>
                    <p className='w-1/2'>{upgrades}</p>
                </div>

                <div className='flex mt-3'>
                    <p className='w-1/2'>Date:</p>
                    <p className='w-1/2'>{date}</p>
                </div>
                <div className='flex'>
                    <p className='w-1/2'>Time:</p>
                    <p className='w-1/2'>{time}</p>
                </div>
                <div className='flex'>
                    <p className='w-1/2'>Notes:</p>
                    <p className='w-1/2'>{notes ? notes : "N/A"}</p>
                </div>

                <div className='flex mt-3'>
                    <p className='w-1/2'>Promo Code:</p>
                    <p className='w-1/2'>{promoCode ? promoCode : "N/A"}</p>
                </div>

                <div className='w-full flex-grow flex items-center justify-center'>
                    <PrimaryButton
                        text={"Save Booking"}
                        id={"save-booking"}
                        name={"save-booking"}
                        bgColor={"bg-[#BF6C00]"}
                        textSize={"text-[16px]"}
                    />
                </div>
            </div>
            <div className='flex flex-col w-1/2 gap-10'>
                <div className='w-full h-1/2 flex flex-col gap-2'>
                    <p>Gcash Account</p>
                    <div className='w-full flex-grow bg-[#7A7A7A]'>

                    </div>
                </div>
                <div className='w-full h-1/2 flex flex-col gap-2'>
                    <p>Bank Account</p>
                    <div className='w-full flex-grow bg-[#7A7A7A]'>

                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default BookingSummaryCard
