import React, { useEffect, useState } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import Swal from 'sweetalert2';
import { AddBooking } from '@/app/APIClient/BookingData';

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
    promoCode,
    setIsModal,
    confirm,
    transactionNumber,
    duration,
    total
}) => {
  
  const [isDisabled, setIsdisabled] = useState(true);
  const [payingMethod, setPayingMethod] = useState("");

  const generateBookingId = () => {
    const timestamp = Date.now().toString(36); // base36 timestamp
    const randomStr = Math.random().toString(36).substring(2, 8); // 6 random characters
    return `BOOK-${timestamp}-${randomStr}`.toUpperCase(); // e.g. BOOK-KZLI3Z-7VD9A1
  };
    
  const handleSaveBooking = async () => {
    if (!email && !contactNumber) {
        Swal.fire({
        icon: 'warning',
        title: 'Missing Contact Info',
        text: 'Please provide either an email or a contact number.',
        });
        return;
    }

    if (!transactionNumber) {
        Swal.fire({
        icon: 'warning',
        title: 'Missing Transaction Number',
        text: 'Please enter the transaction number to confirm your payment.',
        });
        return;
    }

    if (!isDisabled) {
        const payload = {
            booking_id: generateBookingId(),
            name: name,
            email: email,
            contact_number: contactNumber,
            service_type: serviceType,
            stylist_name: stylist.name,
            stylist_image: stylist.empImgSrc,
            upgrades: upgrades,
            date: date,
            time: time,
            notes: notes,
            promo_code: promoCode,
            paying_method: payingMethod,
            transaction_number: transactionNumber,
            total: total,
            duration: duration,
            status: "pending"
        };

        // Show loading SweetAlert
        Swal.fire({
            title: 'Saving Booking...',
            html: 'Please wait while we process your request.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            const response = await AddBooking(payload);

            console.log(response)

            Swal.close(); // Close loading alert

            // Show success (optional)
            Swal.fire({
                icon: 'success',
                title: 'Booking Saved',
                text: 'Your booking has been successfully saved.',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        } catch (e) {
            
            Swal.close(); // Close loading alert

            // Show success (optional)
            Swal.fire({
                icon: 'error',
                title: 'Error Saving Booking',
                text: e,
            });
        }
    }
  };

  useEffect(() => {
    if (name && serviceType && stylist && date && time && (email || contactNumber) && payingMethod) {
        setIsdisabled(false);
    } else {
        setIsdisabled(true);
    }
  }, [name, serviceType, stylist, date, time, email, contactNumber, payingMethod])

  useEffect(() => {
    if (transactionNumber && confirm) {
        handleSaveBooking();
    }
  }, [transactionNumber, confirm])

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
                    <p className='w-1/2'>{stylist?.name}</p>
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

                <div className='flex mt-6'>
                    <p className='w-1/2'>Total:</p>
                    <p className='w-1/2'>&#8369; {total ? total : "0"}</p>
                </div>

                <div className='w-full flex-grow flex items-center justify-center'>
                    <PrimaryButton
                        text={"Save Booking"}
                        id={"save-booking"}
                        name={"save-booking"}
                        bgColor={"bg-[#BF6C00]"}
                        textSize={"text-[16px]"}
                        isDisabled={isDisabled}
                        handleClick={() => setIsModal(true)}
                    />
                </div>
            </div>
            <div className='flex flex-col w-1/2 gap-10'>
                <div className='w-full h-1/2 flex flex-col gap-2'>
                    <p>Gcash Account</p>
                    <div 
                        className={`w-full flex-grow bg-[#7A7A7A] cursor-pointer ${payingMethod == "Gcash" ? "shadow-lg border-4 border-blue-600" : null}`}
                        onClick={() => setPayingMethod("Gcash")}
                    >
                    </div>
                </div>
                <div 
                    className='w-full h-1/2 flex flex-col gap-2'
                >
                    <p>Bank Account</p>
                    <div 
                        className={`w-full flex-grow bg-[#7A7A7A] cursor-pointer ${payingMethod == "Bank Account" ? "shadow-lg border-4 border-blue-600" : null}`}
                        onClick={() => setPayingMethod("Bank Account")}
                    >
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default BookingSummaryCard
