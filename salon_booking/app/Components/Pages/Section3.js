"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PrimaryButton from '../Buttons/PrimaryButton';
import TextInputField from '../Fields/TextInputField';
import SelectField from '../Fields/SelectField';
import TimeInputField from '../Fields/TimeInputField';

const Section3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    serviceType: '',
    date: '',
    time: ''
  });

  const serviceItems = [
    {text: "Haircut + Blow-dry", value: "Haircut + Blow-dry"},
    {text: "Haircut + Styling", value: "Haircut + Styling"},
    {text: "Hair Color", value: "Hair Color"},
    {text: "Manicure & Pedicure", value: "Manicure & Pedicure"},
    {text: "Facial Treatment", value: "Facial Treatment"},
    {text: "Massage", value: "Massage"}
  ];

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className='w-full min-h-[1000px] flex flex-col items-center text-black font-rMedium gap-8 relative py-20'>
        {/* Background - Fade In Only */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Content Elements - Animate Separately */}
        <motion.div
          className='flex flex-col items-center gap-4 relative z-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className='text-[36px] font-rBold'>
            You&apos;re one step closer to a change.
          </p>
          <p className='text-[36px] font-rMedium'>
            Book your appointment now!
          </p>
        </motion.div>

        <motion.div 
          className='w-[90%] max-w-4xl bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 md:p-12 mt-5 mb-2 relative z-10'
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className='text-[32px] font-rBold mb-8 text-center'>Booking Form</h3>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <TextInputField
              inputLabel="Name"
              inputValue={formData.name}
              inputId="sample-name"
              inputName="sample-name"
              handleChange={handleChange('name')}
              inputHeight="h-[70px]"
              inputBorder="border-2 border-gray-300 focus:border-[#BF6C00] transition-colors"
              inputRadius="rounded-xl"
            />
            
            <TextInputField
              inputLabel="Email"
              inputValue={formData.email}
              inputId="sample-email"
              inputName="sample-email"
              handleChange={handleChange('email')}
              inputHeight="h-[70px]"
              inputBorder="border-2 border-gray-300 focus:border-[#BF6C00] transition-colors"
              inputRadius="rounded-xl"
            />
            
            <TextInputField
              inputLabel="Contact Number"
              inputValue={formData.contactNumber}
              inputId="sample-contact"
              inputName="sample-contact"
              handleChange={handleChange('contactNumber')}
              inputHeight="h-[70px]"
              inputBorder="border-2 border-gray-300 focus:border-[#BF6C00] transition-colors"
              inputRadius="rounded-xl"
            />
            
            <SelectField
              selectLabel="Service Type"
              selectValue={formData.serviceType}
              selectId="sample-service"
              selectName="sample-service"
              handleChange={handleChange('serviceType')}
              selectHeight="h-[70px]"
              selectBorder="border-2 border-gray-300 focus:border-[#BF6C00] transition-colors"
              selectRadius="rounded-xl"
              selectItems={serviceItems}
            />
            
            <TextInputField
              inputLabel="Date"
              inputValue={formData.date}
              inputId="sample-date"
              inputName="sample-date"
              handleChange={handleChange('date')}
              inputHeight="h-[70px]"
              inputBorder="border-2 border-gray-300 focus:border-[#BF6C00] transition-colors"
              inputRadius="rounded-xl"
            />
            
            <TimeInputField
              inputLabel="Time"
              inputValue={formData.time}
              inputId="sample-time"
              inputName="sample-time"
              handleChange={handleChange('time')}
              inputHeight="h-[70px]"
              inputBorder="border-2 border-gray-300 focus:border-[#BF6C00] transition-colors"
              inputRadius="rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          <Link href="/booking/booking-form">
            <PrimaryButton
                text={"Start Booking"}
                id={"start-booking"}
                name={"start-booking"}
                bgColor={"bg-[#BF6C00] hover:bg-[#A85A00]"}
                textColor={"text-white"}
            />
          </Link>
        </motion.div>
      
    </div>
  )
}

export default Section3
