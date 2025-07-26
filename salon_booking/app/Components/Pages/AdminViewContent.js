import React, { useEffect, useState } from 'react'
import SelectMonthField from '../Fields/SelectMonthField';
import BookingViewCard from '../Cards/BookingViewCard';
import { GetBooking, GetBookingByMonth, UpdateBookingStatus } from '@/app/APIClient/BookingData';
import BookingReceiptModal from '../Modal/BookingReceiptModal';
import Swal from 'sweetalert2';

const AdminViewContent = () => {

  const [activeTab, setActiveTab] = useState("pending");
  const [monthFilter, setMonthFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(true);

  const handleMonthChange = async (e) => {
    console.log(e.target.value)
    setMonthFilter(e.target.value)
    const data = await GetBookingByMonth(e.target.value.toLowerCase());
    setData(data);
  }

  const fetchBookingData = async () => {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    setMonthFilter(currentMonth);

    const data = await GetBookingByMonth(currentMonth.toLowerCase());

    if (data && data.length > 0) {
        setData(data);
    }
  };

  const fetchAllBookingData = async () => {
    try {
        // Show loading dialog
        Swal.fire({
            title: 'Updating bookings...',
            text: 'Please wait while we update outdated bookings.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        const data = await GetBooking();

        if (!data || data.length === 0) {
            Swal.close(); // Close loading
            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today

        const outdatedBookings = data.filter(item => {
            const bookingDate = new Date(item.date);
            bookingDate.setHours(0, 0, 0, 0);

            const isOutdated = bookingDate < today;
            const isPendingOrUpcoming = item.status === 'pending' || item.status === 'upcoming';

            return isOutdated && isPendingOrUpcoming;
        });

        if (outdatedBookings.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'No outdated bookings',
                text: 'All bookings are up to date.',
            });
            return;
        }

        const updatePromises = outdatedBookings.map(item => {
            const bookingData = {
                id: item.id,
                status: "done",
            };
            return UpdateBookingStatus(bookingData);
        });

        await Promise.all(updatePromises);

        Swal.fire({
            icon: 'success',
            title: 'Bookings Updated',
            text: `${outdatedBookings.length} booking(s) marked as done.`,
            }).then(() => {
            window.location.reload(); // Reload the page after closing the alert
        });

    } catch (error) {
        console.error("Error updating bookings:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update bookings. Please try again later.',
        });
    }
  };


  const confirmBooking = (item, showButton) => {
    setSelected(item);
    setIsShow(true);
    setShowConfirmButton(showButton);
  }

  useEffect(() => {
    fetchBookingData();
  }, []);

  useEffect(() => {
    fetchAllBookingData();
  }, [])

  const filteredData = data.filter(item => {
        const matchesStatus = item.status === activeTab;
        const matchesSearch =
            item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.booking_id.toLowerCase().includes(searchFilter.toLowerCase());

        return matchesStatus && matchesSearch;
  });
  

  return (
    <div className='flex flex-col h-full w-full items-center'>
        <div className='w-[90%] h-fit flex justify-between items-center mt-10 mb-5'>

            <div className='w-fit h-fit flex flex-col'>
                <h1 className='text-black text-[35px] font-psBold'>Bookings</h1>
            </div>

            <div className='flex items-center rounded-[10px] h-[50px] w-[300px] bg-white border border-black/[.6] px-4 py-2 font-Iregular'>
                <input type='text' value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className='bg-transparent focus:border-[0px] focus:outline-[0px] border-[0px] w-full h-full text-black'/>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.9995 14L11.1328 11.1333" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

        </div>

        <div className='w-[90%] h-fit bg-transparent mb-5'>
            <div className='flex justify-start bg-white gap-3 p-2 w-fit h-fit font-rMedium'>
                <button
                    type='button' 
                    className={`py-4 px-6 text-[15px] ${activeTab == "pending"? "bg-[#BA9E25]/[.5] text-black shadow-lg" : "bg-transparent text-black/[.6]"} rounded-[10px] cursor-pointer`}
                    onClick={() => setActiveTab("pending")}
                >
                    Pending
                </button>
                <button
                    type='button' 
                    className={`py-4 px-6 text-[15px] ${activeTab == "upcoming"? "bg-[#BA9E25]/[.5] text-black shadow-lg" : "bg-transparent text-black/[.6]"} rounded-[10px] cursor-pointer`}
                    onClick={() => setActiveTab("upcoming")}
                >
                    Upcoming
                </button>
                <button
                    type='button' 
                    className={`py-4 px-6 text-[15px] ${activeTab == "done"? "bg-[#BA9E25]/[.5] text-black shadow-lg" : "bg-transparent text-black/[.6]"} rounded-[10px] cursor-pointer`}
                    onClick={() => setActiveTab("done")}
                >
                    History
                </button>

            </div>
        </div>

        <div className='w-[90%] h-fit flex gap-5 items-center mt-5 mb-2 font-Iregular ml-10'>
            <div className='text-black'>
                Filter By:
            </div>
            <SelectMonthField monthFilter={monthFilter} handleMonthChange={handleMonthChange} label={activeTab}/>
        </div>

        <h2 className='w-[90%] text-[#BA9E25] text-[28px] font-rBold mt-6 ml-24'>{monthFilter}</h2>

        <div className='h-full flex flex-col w-[80%] gap-2 overflow-x-hidden overflow-y-auto mb-5 mt-10 items-center'>
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => {
                    return (
                        <BookingViewCard
                            key={index}
                            name={item.name}
                            email={item.email}
                            contactNumber={item.contact_number}
                            serviceType={item.service_type}
                            upgrades={item.upgrades}
                            time={item.time}
                            duration={item.duration}
                            bookingId={item.booking_id}
                            activeTab={activeTab}
                            item={item}
                            confirmBooking={confirmBooking}
                        />
                    );
                })
                ) : (
                    <p className='ml-10 text-[#BA9E25] text-[18px]'>
                        No Record For This Month...
                    </p>
            )}
        </div>

        <BookingReceiptModal
            isShow={isShow}
            cancelModal={() => setIsShow(false)}
            bookingDataInfo={selected}
            showConfirmButton={showConfirmButton}
        />
    </div>
  )
}

export default AdminViewContent
