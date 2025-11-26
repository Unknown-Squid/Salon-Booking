"use client";
import PrimaryButton from "@/app/Components/Buttons/PrimaryButton";
import TextInputField from "@/app/Components/Fields/TextInputField";
import Footer from "@/app/Components/Pages/Footer";
import Form from "@/app/Components/Pages/Form";
import HeroBooking from "@/app/Components/Pages/HeroBooking";
import Navbar from "@/app/Components/Pages/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingForm() {
  const [isModal, setIsModal] = useState(false);
  const [transactionNumber, setTransactionNumber] = useState("");
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F3C90D]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF00C3]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20"
      >
        <Navbar />
      </motion.div>

      <main className="flex-1 w-full overflow-x-hidden relative z-10">
        <div className="relative">
          <HeroBooking />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <Form setIsModal={setIsModal} transactionNumber={transactionNumber} confirm={confirm} />
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20"
      >
        <Footer />
      </motion.div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {isModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-2xl px-8 py-6 flex flex-col gap-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h3 className="text-2xl font-rBold text-gray-800">Transaction Number</h3>
                <button
                  onClick={() => setIsModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors text-2xl leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <TextInputField
                inputValue={transactionNumber}
                inputLabel={"Enter Transaction Number"}
                inputId={"search-val"}
                inputName={"search-val"}
                handleChange={(e) => setTransactionNumber(e.target.value)}
                inputHeight={"h-[70px]"}
                inputBorder={"border-2 border-gray-300 focus:border-[#BF6C00]"}
                inputRadius={"rounded-xl"}
              />

              <div className="flex w-full h-fit justify-center gap-4 pt-2">
                <PrimaryButton
                  text={"Cancel"}
                  id={"cancel"}
                  name={"cancel"}
                  bgColor={"bg-transparent hover:bg-gray-50"}
                  textSize={"text-[16px]"}
                  textColor={"text-gray-700"}
                  borderColor={"border-2 border-gray-300 hover:border-gray-400"}
                  handleClick={() => setIsModal(false)}
                />
                <PrimaryButton
                  text={"Confirm"}
                  id={"save-booking"}
                  name={"save-booking"}
                  bgColor={"bg-[#BF6C00] hover:bg-[#A85A00]"}
                  textSize={"text-[16px]"}
                  handleClick={() => {
                    setIsModal(false);
                    setConfirm(true);
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}