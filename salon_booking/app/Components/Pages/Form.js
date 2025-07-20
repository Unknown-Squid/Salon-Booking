"use client"
import React, { useEffect, useState } from 'react'
import TextInputField from '../Fields/TextInputField'
import EmployeeProfile from '../Cards/EmployeeProfile';
import TextAreaField from '../Fields/TextAreaField';
import BookingSummaryCard from '../Cards/BookingSummaryCard';

const Form = () => {

  const [serviceType, setServiceType] = useState("");
  const [stylist, setStylist] = useState(null);
  const [upgrades, setUpgrades] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const empProfItems = [
    {empImgSrc: "/images/pages/employee-profile/employee1.png", name: "stylist 1"},
    {empImgSrc: "/images/pages/employee-profile/employee2.png", name: "stylist 2"},
    {empImgSrc: "/images/pages/employee-profile/employee3.png", name: "stylist 3"}
  ]

  return (
    <div className='bg-white h-fit w-full flex flex-col items-center font-iRegular text-black text-[32px] mb-20'>
      <div className='w-[90%] h-fit bg-transparent flex flex-col gap-16'>
        <h5 className='font-iBold mt-14'>Booking Form</h5>
        <div className='flex w-full h-fit justify-center gap-24'>

          <div className='w-[35%] h-fit flex flex-col gap-5'>
            <TextInputField
                inputLabel={"Service Type"}
                inputValue={serviceType}
                inputId={"service-type"}
                inputName={"service-type"}
                handleChange={(e) => setServiceType(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <div className='w-full h-[400px] flex flex-col gap-4'>
              <p
                className={`font-iRegular text-[24px] text-black`}
              >
                  Choose Stylist
              </p>
              <div className='flex justify-between'>
                  {empProfItems.length > 0 
                    && (
                        empProfItems.map((emp, index) => {
                            return <button
                              key={index}
                              type='button'
                              className='w-fit h-fit cursor-pointer'
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
            <TextInputField
                inputLabel={"Upgrades (optional)"}
                inputValue={upgrades}
                inputId={"upgrades"}
                inputName={"upgrades"}
                handleChange={(e) => setUpgrades(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <TextInputField
                inputLabel={"Name"}
                inputValue={name}
                inputId={"name"}
                inputName={"name"}
                handleChange={(e) => setName(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <TextInputField
                inputLabel={"Email"}
                inputValue={email}
                inputId={"service-email"}
                inputName={"email"}
                handleChange={(e) => setEmail(e.target.value)}
                iinputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <TextInputField
                inputLabel={"Contact Number"}
                inputValue={contactNumber}
                inputId={"contact-number"}
                inputName={"contact-number"}
                handleChange={(e) => setContactNumber(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
          </div>

          <div className='w-[35%] h-fit flex flex-col gap-5'>
            <TextInputField
                inputLabel={"Service Type"}
                inputValue={serviceType}
                inputId={"service-type"}
                inputName={"service-type"}
                handleChange={(e) => setServiceType(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <div className='w-full h-[400px] flex flex-col gap-4'>
              <p
                className={`font-iRegular text-[24px] text-black`}
              >
                  Date
              </p>
              <div className='flex justify-between'>
              </div>
            </div>
            <TextInputField
                inputLabel={"Time"}
                inputValue={time}
                inputId={"time"}
                inputName={"time"}
                handleChange={(e) => setTime(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <TextAreaField
                inputLabel={"Notes"}
                inputValue={notes}
                inputId={"notes"}
                inputName={"notes"}
                handleChange={(e) => setNotes(e.target.value)}
                inputHeight={"h-[205px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <TextInputField
                inputLabel={"Promo Code"}
                inputValue={promoCode}
                inputId={"promo-code"}
                inputName={"promo-code"}
                handleChange={(e) => setPromoCode(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
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
        />
      </div>
    </div>
  )
}

export default Form
