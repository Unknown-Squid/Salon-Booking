"use client";
import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import EmployeeProfile from '../Cards/EmployeeProfile';

const Section1AboutUs = () => {
  const empProfItems = [
    {empImgSrc: "/images/pages/employee-profile/employee1.png"},
    {empImgSrc: "/images/pages/employee-profile/employee2.png"},
    {empImgSrc: "/images/pages/employee-profile/employee3.png"}
  ]

  const empProfItems2 = [
    {empImgSrc: "/images/pages/employee-profile/employee4.png"},
    {empImgSrc: "/images/pages/employee-profile/employee5.png"}
  ]
  return (
    <div 
        className='w-full h-[1280px] flex flex-col z-10'
        style={{
            background: `conic-gradient(from 112.15deg at 50% 50%, rgba(126, 126, 126, 0.76) 0deg,
             rgba(238, 247, 255, 0.76) 84.83deg, #939393 181.75deg, 
             #EEF7FF 295.99deg, rgba(126, 126, 126, 0.76) 360deg)`,
        }}
    >
        <div className='w-full h-fit flex flex-col items-center justify-center gap-2 font-isBold text-black text-[42px] mt-32'>
            <p>Meet Our Salon Team.</p>
            <p>With Professional Hands and Passionate Hearts</p>
        </div>
        <div className='flex w-full h-fit items-start justify-center mt-32'>
            <div className='flex flex-col w-[40%] h-fit gap-10 items-center'>
                <p className='text-black font-iMedium w-[50%] text-center text-[42px] text-wrap'>Our Stylists</p>
                 <div className='flex flex-wrap w-full h-fit gap-32 items-center justify-center'>
                    {empProfItems.length > 0 
                    && (
                        empProfItems.map((emp, index) => {
                            return <EmployeeProfile
                                key={index}
                                empImgSrc={emp.empImgSrc}
                            />
                        })
                    )}
                </div>
            </div>
            <div className='flex flex-col w-[40%] h-fit gap-10 items-center'>
                <p className='text-black font-iMedium w-[50%] text-center text-[42px] text-wrap'>The Experts Behind the Chair</p>
                 <div className='flex flex-wrap w-full h-fit gap-32 items-center justify-center'>
                    {empProfItems2.length > 0 
                    && (
                        empProfItems2.map((emp, index) => {
                            return <EmployeeProfile
                                key={index}
                                empImgSrc={emp.empImgSrc}
                            />
                        })
                    )}
                </div>
            </div>
        </div>
        
        <div className='w-full h-fit flex justify-center'>
            <PrimaryButton
                text={"Book Now"}
                id={"book-now"}
                name={"book-now"}
                bgColor={"bg-[#BF6C00]"}
            />
        </div>
    </div>

  )
}

export default Section1AboutUs