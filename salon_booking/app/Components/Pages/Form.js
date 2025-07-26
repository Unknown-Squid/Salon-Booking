"use client"
import React, { use, useEffect, useMemo, useState } from 'react'
import TextInputField from '../Fields/TextInputField'
import EmployeeProfile from '../Cards/EmployeeProfile';
import TextAreaField from '../Fields/TextAreaField';
import BookingSummaryCard from '../Cards/BookingSummaryCard';
import BookingCalendar from '../Calendar/BookingCalendar';
import SelectField from '../Fields/SelectField';
import TimeInputField from '../Fields/TimeInputField';
import { GetBookingByKey } from '@/app/APIClient/BookingData';
import Swal from 'sweetalert2';

const Form = ({setIsModal, transactionNumber, confirm}) => {

  const [serviceType, setServiceType] = useState(0);
  const [stylist, setStylist] = useState(null);
  const [upgrades, setUpgrades] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [serviceDuration, setServiceDuration] = useState(0);
  const [upgradesDuration, setUpgradesDuration] = useState(0);

  const [serviceTotal, setServiceTotal] = useState(0);
  const [upgradesTotal, setUpgradesTotal] = useState(0);
  const [data, setData] = useState([]);

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;

    // Parse selected time
    const [selHour, selMin] = selectedTime.split(":").map(Number);
    const selectedDate = new Date();
    selectedDate.setHours(selHour, selMin, 0, 0); // clear seconds/millis

    // Time formatter for AM/PM display
    const formatTime = (date) =>
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

    // Check conflict
    const conflict = data.find((booking) => {
      const [bookHour, bookMin] = booking.time.split(":").map(Number);
      const bookingStart = new Date();
      bookingStart.setHours(bookHour, bookMin, 0, 0);

      const duration = booking.duration || 0; // already in data
      const bookingEnd = new Date(bookingStart.getTime() + duration * 60000);

      return selectedDate >= bookingStart && selectedDate < bookingEnd;
    });

    if (conflict) {
      const [bookHour, bookMin] = conflict.time.split(":").map(Number);
      const bookingStart = new Date();
      bookingStart.setHours(bookHour, bookMin, 0, 0);

      const duration = conflict.duration || 0;
      const bookingEnd = new Date(bookingStart.getTime() + duration * 60000);

      Swal.fire({
        icon: "warning",
        title: "Time Conflict",
        text: `Selected time overlaps with an existing booking by ${conflict.name}.\nBooked from ${formatTime(bookingStart)} to ${formatTime(bookingEnd)}.`,
      });

      setTime(""); // Clear input
      return;
    }

    // No conflict — set time
    setTime(selectedTime);
  };

  const serviceItems = [
    {text: "Service 1", value: "Service 1", price: 299, duration: 60},
    {text: "Service 2", value: "Service 2", price: 250, duration: 30},
    {text: "Service 3", value: "Service 3", price: 150, duration: 90}
  ]

  const upgradesItems = [
    {text: "Upgrade 1", value: "Upgrade 1", price: 120, duration: 30},
    {text: "Upgrade 2", value: "Upgrade 2", price: 99, duration: 30},
    {text: "Upgrade 3", value: "Upgrade 3", price: 50, duration: 45}
  ]

  const empProfItems = [
    {empImgSrc: "/images/pages/employee-profile/employee1.png", name: "stylist 1"},
    {empImgSrc: "/images/pages/employee-profile/employee2.png", name: "stylist 2"},
    {empImgSrc: "/images/pages/employee-profile/employee3.png", name: "stylist 3"}
  ]
  
  const textInputConfigs = [
    {
      type: "select",
      label: "Service Type",
      value: serviceType,
      selectItems: serviceItems,
      id: "service-type",
      name: "service-type",
      onChange: (e, idx) => (setServiceType(e.target.value), setServiceDuration(serviceItems[idx].duration), setServiceTotal(serviceItems[idx].price)),
    },
    {
      type: "stylist",
      label: "Choose Stylist"
    },
    {
      type: "select",
      label: "Upgrades (optional)",
      value: upgrades,
      selectItems: upgradesItems,
      id: "upgrades",
      name: "upgrades",
      onChange: (e, idx) => (setUpgrades(e.target.value), setUpgradesDuration(upgradesItems[idx].duration), setUpgradesTotal(upgradesItems[idx].price)),
    },
    {
      type: "input",
      label: "Name",
      value: name,
      id: "name",
      name: "name",
      onChange: (e) => setName(e.target.value),
    },
    {
      type: "input",
      label: "Email",
      value: email,
      id: "service-email",
      name: "email",
      onChange: (e) => setEmail(e.target.value),
    },
    {
      type: "input",
      label: "Contact Number",
      value: contactNumber,
      id: "contact-number",
      name: "contact-number",
      onChange: (e) => setContactNumber(e.target.value),
    },
    {
      type: "input",
      label: "Promo Code",
      value: promoCode,
      id: "promo-code",
      name: "promo-code",
      onChange: (e) => setPromoCode(e.target.value),
    },
  ];

  const textInputConfigs2 = [
    {
      type: "calendar",
      label: "Date",
      component: <BookingCalendar setBookingDate={setDate} />,
    },
    {
      type: "time",
      label: "Time",
      value: time,
      id: "time",
      name: "time",
      onChange: handleTimeChange,
    },
    {
      type: "textarea",
      label: "Notes",
      value: notes,
      id: "notes",
      name: "notes",
      onChange: (e) => setNotes(e.target.value),
    },
  ];

  const computedEndTime = useMemo(() => {
    if (!time) return "";
    const [hour, minute] = time.split(":").map(Number);
    const date = new Date();
    const duration = serviceDuration + upgradesDuration;
    date.setHours(hour);
    date.setMinutes(minute + duration); // add duration in minutes

    let endHour = date.getHours();
    const endMinute = String(date.getMinutes()).padStart(2, "0");
    const ampm = endHour >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    endHour = endHour % 12;
    endHour = endHour === 0 ? 12 : endHour; // handle 0 as 12

    return `${endHour}:${endMinute} ${ampm}`;
  }, [time, upgradesDuration, serviceDuration]);


  useEffect(() => {
    const fetchBookingData = async () => {
      const key = "date";
      const value = date;

      const data = await GetBookingByKey(key, value);
      console.log(data)
      setData(data)
    };

    if (date) { // Only fetch if bookingDate is provided
      fetchBookingData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);
  


  return (
    <div className='bg-white h-fit w-full flex flex-col items-center font-iRegular text-black text-[32px] mb-20'>
      <div className='w-[90%] h-fit bg-transparent flex flex-col gap-16'>
        <h5 className='font-iBold mt-14'>Booking Form</h5>
        <div className='flex w-full h-fit justify-center gap-24'>

          <div className='w-[30%] h-fit flex flex-col gap-5'>
            {textInputConfigs.map((field, idx) => {
              if (field.type === "input") { 
                return <TextInputField
                  key={idx}
                  inputLabel={field.label}
                  inputValue={field.value}
                  inputId={field.id}
                  inputName={field.name}
                  handleChange={field.onChange}
                  inputHeight={"h-[70px]"}
                  inputBorder={"border border-black"}
                  inputRadius={"rounded-[10px]"}
                />
              } 
              if (field.type === "select") { 
                return <SelectField
                  key={idx}
                  selectLabel={field.label}
                  selectValue={field.value}
                  selectId={field.id}
                  selectName={field.name}
                  handleChange={(e) => field.onChange(e, idx)}
                  selectHeight={"h-[70px]"}
                  selectBorder={"border border-black"}
                  selectRadius={"rounded-[10px]"}
                  selectItems={field.selectItems}
                />
              }
              if (field.type === "stylist") { 
                return  <div key={idx}
                    className='w-full h-fit flex flex-col gap-4'
                  >
                  <p
                    className={`font-iRegular text-[24px] text-black`}
                  >
                      Choose Stylist
                  </p>
                  <div className='flex gap-6'>
                      {empProfItems.length > 0 
                        && (
                            empProfItems.map((emp, index) => {
                                return <button
                                  key={index}
                                  type='button'
                                  className={`${stylist?.name == emp.name ? "shadow-lg border-4 border-blue-600 rounded-[10px]" : null} w-fit h-fit cursor-pointer`}
                                  onClick={() => setStylist(empProfItems[index])}
                                >
                                  <EmployeeProfile
                                      empImgSrc={emp.empImgSrc}
                                      empName={emp.name}
                                  />
                                </button>
                        })
                      )}
                  </div>
                </div>
              }
            })}
          </div>

          <div className='w-[30%] h-fit flex flex-col gap-5'>
            {textInputConfigs2.map((field, idx) => {
              if (field.type === "input") {
                return (
                  <TextInputField
                    key={idx}
                    inputLabel={field.label}
                    inputValue={field.value}
                    inputId={field.id}
                    inputName={field.name}
                    handleChange={field.onChange}
                    inputHeight={"h-[70px]"}
                    inputBorder={"border border-black"}
                    inputRadius={"rounded-[10px]"}
                  />
                );
              }
              if (field.type === "time") { 
                return <div key={idx} 
                    className='flex items-center h-fit w-full gap-3'
                  >
                    <TimeInputField
                      inputLabel={field.label}
                      inputValue={field.value}
                      inputId={field.id}
                      inputName={field.name}
                      handleChange={field.onChange}
                      inputHeight={"h-[70px]"}
                      inputBorder={"border border-black"}
                      inputRadius={"rounded-[10px]"}
                    />
                    <div className='flex-1 flex flex-col self-stretch flex justify-center pt-10 text-[20px] gap-2'>
                      <p>
                        duration - ({serviceDuration + upgradesDuration})
                      </p>
                       <p>end - ({computedEndTime})</p>
                    </div>
                </div>
              } 
              if (field.type === "textarea") {
                return (
                  <TextAreaField
                    key={idx}
                    inputLabel={field.label}
                    inputValue={field.value}
                    inputId={field.id}
                    inputName={field.name}
                    handleChange={field.onChange}
                    inputHeight={"h-[220px]"}
                    inputBorder={"border border-black"}
                    inputRadius={"rounded-[10px]"}
                  />
                );
              }
              if (field.type === "calendar") {
                return (
                  <div key={idx} className='w-full h-fit flex flex-col'>
                    <p className='font-iRegular text-[24px] text-black'>{field.label}</p>
                    {field.component}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>

        <BookingSummaryCard
          name={name}
          email={email}
          contactNumber={contactNumber}
          serviceType={serviceType}
          stylist={stylist}
          upgrades={upgrades}
          date={date}
          time={time}
          notes={notes}
          promoCode={promoCode}
          setIsModal={setIsModal}
          confirm={confirm}
          transactionNumber={transactionNumber}
          duration={serviceDuration + upgradesDuration}
          total={serviceTotal + upgradesTotal}
        />
      </div>
    </div>
  )
}

export default Form
