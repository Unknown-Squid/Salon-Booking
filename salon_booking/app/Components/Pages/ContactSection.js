"use client"
import React, { useState } from 'react'
import TextInputField from '../Fields/TextInputField'
import TextAreaField from '../Fields/TextAreaField';
import PrimaryButton from '../Buttons/PrimaryButton';

const ContactSection = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className='bg-white/[.6] w-full h-[1000px] flex items-center justify-center z-10 gap-32'>
        <div className='w-fit h-full justify-center flex flex-col px-6 text-black font-iLight gap-10'>
            <p className='text-wrap text-[48px] w-[500px] mb-12'>
                Have questions? Reach out to us via email or call us today.
            </p>

            <div className='text-[32px] flex gap-10'>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7917 22.4792C16.7917 28.375 21.625 33.1875 27.5208 36.2083L32.1042 31.625C32.6667 31.0625 33.5 30.875 34.2292 31.125C36.5625 31.8958 39.0833 32.3125 41.6667 32.3125C42.8125 32.3125 43.75 33.25 43.75 34.3958V41.6667C43.75 42.8125 42.8125 43.75 41.6667 43.75C22.1042 43.75 6.25 27.8958 6.25 8.33333C6.25 7.1875 7.1875 6.25 8.33333 6.25H15.625C16.7708 6.25 17.7083 7.1875 17.7083 8.33333C17.7083 10.9375 18.125 13.4375 18.8958 15.7708C19.125 16.5 18.9583 17.3125 18.375 17.8958L13.7917 22.4792Z" fill="black"/>
                </svg>
                <p>xxxx-xxxx-xxxx</p>
            </div>
            <div className='text-[32px] flex gap-10'>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7917 22.4792C16.7917 28.375 21.625 33.1875 27.5208 36.2083L32.1042 31.625C32.6667 31.0625 33.5 30.875 34.2292 31.125C36.5625 31.8958 39.0833 32.3125 41.6667 32.3125C42.8125 32.3125 43.75 33.25 43.75 34.3958V41.6667C43.75 42.8125 42.8125 43.75 41.6667 43.75C22.1042 43.75 6.25 27.8958 6.25 8.33333C6.25 7.1875 7.1875 6.25 8.33333 6.25H15.625C16.7708 6.25 17.7083 7.1875 17.7083 8.33333C17.7083 10.9375 18.125 13.4375 18.8958 15.7708C19.125 16.5 18.9583 17.3125 18.375 17.8958L13.7917 22.4792Z" fill="black"/>
                </svg>
                <p>xxxx-xxxx-xxxx</p>
            </div>
        </div>
        <div className='flex flex-col w-[30%] h-full justify-center gap-5'>
            <TextInputField
                inputLabel={"Email"}
                inputValue={email}
                inputId={"email"}
                inputName={"email"}
                handleChange={(e) => setEmail(e.target.value)}
                inputHeight={"h-[55px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <TextAreaField
                inputLabel={"Message"}
                inputValue={message}
                inputId={"message"}
                inputName={"message"}
                handleChange={(e) => setMessage(e.target.value)}
                inputHeight={"h-[400px]"}
                inputBorder={"border border-black"}
                inputRadius={"rounded-[10px]"}
            />
            <PrimaryButton
                text={"Send Email"}
                id={"send-email"}
                name={"send-email"}
                bgColor={"bg-transparent"}
                textColor={"text-black"}
            />
        </div>
      
    </div>
  )
}

export default ContactSection
