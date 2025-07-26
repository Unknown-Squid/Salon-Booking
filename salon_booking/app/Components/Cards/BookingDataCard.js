import { duration } from '@mui/material';
import React, { useMemo } from 'react'

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
    duration,
    total,
    notes,
    promoCode
}) => {
  const computedEndTime = useMemo(() => {
    if (!time) return "";
    const [hour, minute] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute + duration); // add duration in minutes

    let endHour = date.getHours();
    const endMinute = String(date.getMinutes()).padStart(2, "0");
    const ampm = endHour >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    endHour = endHour % 12;
    endHour = endHour === 0 ? 12 : endHour; // handle 0 as 12

    return `${endHour}:${endMinute} ${ampm}`;
  }, [time, duration]);

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
                        <p className='w-1/2'>Duration: </p>
                        <p className='w-1/2'>{duration ? `${duration} minutes` : "0"}</p>
                    </div>
                </div>
                <div className='w-fit h-fit flex gap-15'>
                    <div className='flex gap-3'>
                        <p>Start Time: </p>
                        <p>{time}</p>
                        <p>-----</p>
                        <p>End Time: </p>
                        <p>{computedEndTime}</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>Total: </p>
                        <p>&#8369; {total}</p>
                    </div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='flex'>
                        <p className='w-1/2'>Promo Code: </p>
                        <p className='w-1/2'>{promoCode}</p>
                    </div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='flex'>
                        <p className='w-1/2'>Notes: </p>
                        <p className='w-1/2'>{notes}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingDataCard
