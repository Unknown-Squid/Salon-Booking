"use client"
import React, { useState } from 'react'
import TextInputField from '../Fields/TextInputField'
import BookingDataCard from '../Cards/BookingDataCard';
import { GetBookingByKey } from '@/app/APIClient/BookingData';
import Swal from 'sweetalert2';

const BookingData = () => {

  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState([]);

  const fetchBookingData = async () => {
    Swal.fire({
        title: 'Searching...',
        text: 'Please wait while we fetch the booking data.',
        allowOutsideClick: false,
        didOpen: () => {
        Swal.showLoading();
        },
    });

    try {
        const key = "booking_id";
        const value = searchVal;

        const data = await GetBookingByKey(key, value);
        setData(data);
    } catch (error) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while fetching data.',
        });
    } finally {
        Swal.close(); // Close the loading popup
    }
  };

  const onEnter = async (e) => {
    e.preventDefault(); // 💥 Prevent default Enter behavior (like form submission)

    if (!searchVal.trim()) {
        Swal.fire({
        icon: 'warning',
        title: 'Booking ID Required',
        text: 'Please enter a booking ID to search.',
        });
        return;
    }

    await fetchBookingData();
  };


  return (
    <div className='flex flex-col bg-white w-full h-fit items-center'>

        <div className='w-[90%] h-fit flex flex-col bg-transparent mb-10'>
            <h5 className='font-iBold mt-14 text-black'>Search Booking</h5>
            <TextInputField
                inputValue={searchVal}
                inputId={"search-val"}
                inputName={"search-val"}
                handleChange={(e) => setSearchVal(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
                handleKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onEnter(e);
                    }
                }}
            />
            {data.length > 0 
                && (data.map((item, index) => {
                    return <BookingDataCard
                        key={index}
                        bookingId={item.booking_id}
                        status={item.status}
                        name={item.name}
                        email={item.email}
                        contactNumber={item.contact_number}
                        serviceType={item.service_type}
                        stylist={item.stylist_name}
                        upgrades={item.upgrades}
                        date={item.date}
                        time={item.time}
                        duration={item.duration}
                        total={item.total}
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
