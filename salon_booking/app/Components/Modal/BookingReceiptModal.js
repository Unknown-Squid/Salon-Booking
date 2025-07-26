import React, { useEffect, useMemo, useState } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import Swal from 'sweetalert2'
import { CloseOutlined, ReceiptLong } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { UpdateBookingStatus } from '@/app/APIClient/BookingData';

const BookingReceiptModal = ({ 
    isShow,
    cancelModal,
    bookingDataInfo,
    showConfirmButton
}) => {


  const confirmBooking = async () => {
    const bookingData = {
        id: bookingDataInfo.id,
        status: "upcoming",
        date: bookingDataInfo.date,
        booking_id: bookingDataInfo.booking_id
    }

    const result = await Swal.fire({
        title: 'Confirm Submission',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Back',
        cancelButtonText: 'Done',
        customClass: {
            confirmButton: 'custom-back-button',
            cancelButton: 'custom-done-button',
            popup: 'custom-swal-popup',
        },
        buttonsStyling: false,
    });

    if (result.isConfirmed) {
        return;
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        const bookingStatusChanged = await UpdateBookingStatus(bookingData);

        if (bookingStatusChanged) {
            Swal.fire({
                title: '',
                text: 'Booking status has been successfully changed. Please check it under the Upcoming tab.',
                icon: 'success',
                confirmButtonText: 'Ok',
                customClass: {
                confirmButton: 'custom-done-button',
                popup: 'custom-swal-popup',
                },
                buttonsStyling: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload()
                } 
            });
        } else {
            Swal.fire({
                title: '',
                text: 'An error occurred while changing the booking status. Please try again later. If the problem persists, contact the it administrator.',
                icon: 'error',
                confirmButtonText: 'Ok',
                customClass: {
                confirmButton: 'custom-done-button',
                popup: 'custom-swal-popup',
                },
                buttonsStyling: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload()
                } 
            });
        }
    }

  }

  const computedEndTime = useMemo(() => {
    if (!bookingDataInfo.time) return "";
    const [hour, minute] = bookingDataInfo.time.split(":").map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute + bookingDataInfo.duration); // add duration in minutes

    let endHour = date.getHours();
    const endMinute = String(date.getMinutes()).padStart(2, "0");
    const ampm = endHour >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    endHour = endHour % 12;
    endHour = endHour === 0 ? 12 : endHour; // handle 0 as 12

    return `${endHour}:${endMinute} ${ampm}`;
  }, [bookingDataInfo]);

  return (
    <div className={`absolute top-0 left-0 w-full h-full bg-black/[.5] ${isShow ? "flex" : "hidden"} items-center justify-center z-10`}>

        <div className={`xl:w-[30%] lg:w-[50%] sm:w-[70%] w-[98%] h-fit bg-white rounded-[10px] px-6 py-4 mt-20 ${isShow ? "flex" : "hidden"} flex-col overflow-x-hidden overflow-y-auto`}>

            <div className="flex flex-row justify-between text-black">
                <div className="flex flex-row gap-[8px] items-center">
                    <ReceiptLong />
                    Booking Receipt
                </div>
                <div>
                    <IconButton
                        onClick={cancelModal}
                    >
                        <CloseOutlined />
                    </IconButton>
                </div>
            </div>

            <h2 className="text-[#BA9E25] md:text-[30px] text-[20px] border-b border-black mt-5 py-2">Reservation Summary</h2>

            <div className="flex flex-col gap-2 h-fit w-full mt-7">
                {bookingDataInfo.name ? 
                    <p className="h-fit w-full flex justify-between">
                        <span className="text-black/[.6]">Name</span>
                        <span className="text-black">{bookingDataInfo.name}</span>
                    </p> : null
                }
                {bookingDataInfo.email || bookingDataInfo.contact_number? 
                    <p className="h-fit w-full flex justify-between">
                        <span className="text-black/[.6]">{bookingDataInfo.email ? "Email" : "Contact Number"}</span>
                        <span className="text-black">{bookingDataInfo.email ? bookingDataInfo.email : bookingDataInfo.contact_number}</span>
                    </p> : null
                }
                {bookingDataInfo.booking_id ? 
                    <p className="h-fit w-full flex justify-between">
                        <span className="text-black/[.6]">Booking ID</span>
                        <span className="text-black">{bookingDataInfo.booking_id}</span>
                    </p> : null
                }
                {bookingDataInfo.service_type ? 
                    <p className="h-fit w-full flex justify-between">
                        <span className="text-black/[.6]">Service Type</span>
                        <span className="text-black">{bookingDataInfo.service_type}</span>
                    </p> : null
                }
                {bookingDataInfo.service_type && bookingDataInfo.date ? 
                    <p className="h-fit w-full flex justify-between">
                        <span className="text-black/[.6]">Date</span>
                        <span className="text-black">{bookingDataInfo.date}</span>
                    </p> : null
                }
                {bookingDataInfo.duration ?
                    <div className='flex flex-col gap-5 mt-12'>
                        <p className="text-black w-full h-[1px] border border-dashed border-black"></p>
                        <p className="h-fit w-fit gap-5 flex">
                            <span className="text-black/[.6]">Duration</span>
                            <span className="text-black">{bookingDataInfo.duration ? `${bookingDataInfo.duration} minutes` : "0"}</span>
                        </p>
                    </div>  : null
                }
                {bookingDataInfo.time ? 
                    <p className="h-fit w-fit gap-3 flex">
                        <span className="text-black/[.6]">Time</span>
                        <span className="text-black">{bookingDataInfo.time}</span>
                        <span className="text-black">----</span>
                        <span className="text-black">{computedEndTime}</span>
                    </p> : null
                }
                {bookingDataInfo.total ? 
                    <p className="h-fit w-fit gap-3 flex">
                        <span className="text-black/[.6]">&#8369; Total</span>
                        <span className="text-black">{bookingDataInfo.total}</span>
                    </p> : null
                }
            </div>
            
            {showConfirmButton ? 
                <div className="flex w-full h-fit justify-center gap-4 mt-10">
                    <PrimaryButton
                        text={"Cancel"}
                        id={"cancel"}
                        name={"cancel"}
                        bgColor={"bg-transparent"}
                        textSize={"text-[16px]"}
                        textColor={"text-black"}
                        borderColor={"border border-[#BF6C00]"}
                        handleClick={cancelModal}
                    />
                    <PrimaryButton
                        text={"Confirm"}
                        id={"save-booking"}
                        name={"save-booking"}
                        bgColor={"bg-[#BF6C00]"}
                        textSize={"text-[16px]"}
                        handleClick={confirmBooking}
                    />
                </div>
                : null

            }

        </div>

    </div>
  )
}

export default BookingReceiptModal
