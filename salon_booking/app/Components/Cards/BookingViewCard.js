import React, { useMemo } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

const BookingViewCard = ({ 
    name,
    email,
    serviceType,
    upgrades,
    time,
    duration,
    bookingId,
    activeTab,
    item,
    confirmBooking
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
    <div className='rounded-[15px] w-[90%] h-fit py-8 px-6 bg-white border border-black/[.6] flex justify-between items-center mt-10'>
        <div className='w-fit flex flex-col'>
            <p className='font-rBold text-black text-[24px]'>{name}</p>
            <p className='font-iRegular text-black text-[14px]'>{email}</p>
        </div>
        <div className='w-[20%] flex flex-col px-10'>
            <h3 className='text-black text-[24px] font-rMedium'>{serviceType}</h3>
            <p className='text-black text-[14px] font-iRegular'>{upgrades ? upgrades : "N/A"}</p>
        </div>
        <div className='w-[30%] flex flex-col justify-center gap-1'>
            <div className='flex gap-4 items-center'>
                <p className='font-iRegular text-black text-[20px]'>{time} - {computedEndTime} <span className='text-[15px]'>({duration ? `${duration} minutes` : "0"})</span> </p>
            </div>
            <p className='font-rBold text-black text-[16px]'>{bookingId}</p>
        </div>
        <div className='w-[25%] h-fit flex justify-end'>
            {activeTab == "pending" ?
                <PrimaryButton
                    text={"Confirm Booking"}
                    id={"confirm-booking"}
                    name={"confirm-booking"}
                    bgColor={"bg-transparent"}
                    textColor={"text-black"}
                    textSize={"text-[16px]"}
                    borderColor={"border border-[#BF6C00]"}
                    handleClick={() => confirmBooking(item, true)}
                /> :
                <PrimaryButton
                    text={"View Details"}
                    id={"view-details"}
                    name={"view-details"}
                    bgColor={"bg-[#BF6C00]"}
                    textSize={"text-[16px]"}
                    handleClick={() => confirmBooking(item, false)}
                />
            }
        </div>
    </div>
  )
}

export default BookingViewCard
