"use client";
import PrimaryButton from "@/app/Components/Buttons/PrimaryButton";
import TextInputField from "@/app/Components/Fields/TextInputField";
import Footer from "@/app/Components/Pages/Footer";
import Form from "@/app/Components/Pages/Form";
import HeroBooking from "@/app/Components/Pages/HeroBooking";
import Navbar from "@/app/Components/Pages/Navbar";
import { useEffect, useState } from "react";




export default function BookingForm() {

  const [isModal, setIsModal] = useState(false);
  const [transactionNumber, setTransactionNumber] = useState("");
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col bg-white relative">
      <main className="h-full w-full overflow-x-hidden overflow-y-auto">
        <Navbar/>

        <HeroBooking/>
        <Form setIsModal={setIsModal} transactionNumber={transactionNumber} confirm={confirm}/>
        <Footer/>
      </main>
      {isModal 
        && (
          <div className="w-full h-full bg-black/[.6] flex items-center justify-center absolute top-0 left-0">
            <div className="bg-white rounded-[10px] px-6 py-4 flex flex-col gap-4">
              <TextInputField
                  inputValue={transactionNumber}
                  inputLabel={"Transaction Number"}
                  inputId={"search-val"}
                  inputName={"search-val"}
                  handleChange={(e) => setTransactionNumber(e.target.value)}
                  inputHeight={"h-[70px]"}
                  inputBorder={"border border-black"}
                  inputRadius={"rounded-[10px]"}
              />
              <div className="flex w-full h-fit justify-center gap-4">
                <PrimaryButton
                    text={"Cancel"}
                    id={"cancel"}
                    name={"cancel"}
                    bgColor={"bg-transparent"}
                    textSize={"text-[16px]"}
                    textColor={"text-black"}
                    borderColor={"border border-[#BF6C00]"}
                    handleClick={() => setIsModal(false)}
                />
                <PrimaryButton
                    text={"Confirm"}
                    id={"save-booking"}
                    name={"save-booking"}
                    bgColor={"bg-[#BF6C00]"}
                    textSize={"text-[16px]"}
                    handleClick={() => (setIsModal(false), setConfirm(true))}
                />
              </div>
            </div>

          </div>
        )
      }
    </div>
  );
}