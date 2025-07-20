"use client"
import React, { useState } from 'react'
import TextInputField from '../Fields/TextInputField'
import BookingDataCard from '../Cards/BookingDataCard';

const BookingData = () => {

  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState([
    {   
        bookingId: "XXXXXXXXXXXX",
        status: "Active",
        name: "Juan Dela Cruz",
        email: "juandelacruz@gmail.com",
        contactNumber: "09123456789",
        date: "June 15, 2025",
        serviceType: "Haircut",
        stylist: "Juan Dela Cruz",
        upgrades: null,
        time: "3:00 PM",
        promoCode: "XKASDV1XUDD",
        notes: "I’m kinda sensitive about my skin."
    }
  ]);

  return (
    <div className='flex flex-col bg-white w-full h-fit items-center'>

        <div className='w-[90%] h-fit flex flex-col bg-transparent'>
            <h5 className='font-iBold mt-14 text-black'>Search Booking</h5>
            <TextInputField
                inputValue={searchVal}
                inputId={"search-val"}
                inputName={"search-val"}
                handleChange={(e) => setSearchVal(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            {data.length > 0 
                && (data.map((item, index) => {
                    return <BookingDataCard
                        key={index}
                        bookingId={item.bookingId}
                        status={item.status}
                        name={item.name}
                        email={item.email}
                        contactNumber={item.contactNumber}
                        serviceType={item.serviceType}
                        stylist={item.stylist}
                        upgrades={item.upgrades}
                        date={item.date}
                        time={item.time}
                        notes={item.notes}
                        promoCode={item.promoCode}
                    />
                })
            )}
        </div>
    </div>
  )
}

export default BookingData
