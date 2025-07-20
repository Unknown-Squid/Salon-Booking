import React from 'react'

const BookingDataCard = ({
    bookingId,
    status,
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
        <div className='w-full h-fit p-16 border border-dashed border-black flex gap-5 rounded-[15px]'>
            <div className='flex flex-col w-full gap-5'>
                <p>Booking Recipt ID ({bookingId}) - Status: <span className={`${status == "Active" ? "text-green-400" : "text-orange-400"}`}>{status}</span></p>
                <div className='grid grid-cols-4'>
                    <div className='flex'>
                        <p className='w-1/2'>Name: </p>
                        <p className='w-1/2'>{name}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/2'>Email: </p>
                        <p className='w-1/2'>{email}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/2'>Contact Number: </p>
                        <p className='w-1/2'>{contactNumber}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/2'>Date: </p>
                        <p className='w-1/2'>{date}</p>
                    </div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='flex'>
                        <p className='w-1/2'>Service Type: </p>
                        <p className='w-1/2'>{serviceType}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/2'>Stylist: </p>
                        <p className='w-1/2'>{stylist}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/2'>Upgrades: </p>
                        <p className='w-1/2'>{upgrades}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-1/2'>Time: </p>
                        <p className='w-1/2'>{time}</p>
                    </div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='flex'>
                        <p className='w-1/2'>Promo Code:: </p>
                        <p className='w-1/2'>{promoCode}</p>
                    </div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='flex'>
                        <p className='w-1/2'>Notes:: </p>
                        <p className='w-1/2'>{notes}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingDataCard
