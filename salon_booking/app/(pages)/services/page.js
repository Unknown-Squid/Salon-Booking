"use client";
import { motion } from "framer-motion";
import Navbar from "../../Components/Pages/Navbar";
import Hero from "../../Components/Pages/Hero";
import Section2 from "../../Components/Pages/Section2";
import Footer from "../../Components/Pages/Footer";
import SalonPackages from "../../Components/Pages/SalonPackages";
import ServicesList from "../../Components/Pages/ServicesList";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Services() {

  const servicesItems = [
    // Hair Services
    {title: "Haircut + Blow-dry", price: "₱ 350", duration: "45 min"},
    {title: "Haircut + Styling (Iron/Curl/Blowout)", price: "₱ 550", duration: "60 min"},
    {title: "Basic Hair Treatment", price: "₱ 450", duration: "45 min"},
    {title: "Deep Hair Spa Treatment", price: "₱ 650", duration: "90 min"},
    {title: "Hair Color Retouch", price: "₱ 1,200", duration: "120 min"},
    {title: "Full Hair Color", price: "₱ 1,800", duration: "150 min"},
    {title: "Hair Highlights", price: "₱ 1,500", duration: "180 min"},
    {title: "Hair Perm", price: "₱ 2,200", duration: "180 min"},
    {title: "Hair Rebonding", price: "₱ 2,500", duration: "240 min"},
    
    // Nail Services
    {title: "Manicure", price: "₱ 200", duration: "30 min"},
    {title: "Pedicure", price: "₱ 250", duration: "40 min"},
    {title: "Manicure & Pedicure", price: "₱ 400", duration: "60 min"},
    {title: "Gel Manicure", price: "₱ 350", duration: "45 min"},
    {title: "Gel Pedicure", price: "₱ 400", duration: "50 min"},
    {title: "Manicure & Pedicure with Gel Polish", price: "₱ 650", duration: "75 min"},
    {title: "Nail Art Design", price: "₱ 150", duration: "20 min"},
    {title: "Nail Extension", price: "₱ 800", duration: "90 min"},
    
    // Facial Services
    {title: "Light Facial Cleanse", price: "₱ 400", duration: "45 min"},
    {title: "Full Facial Treatment (with Mask & Massage)", price: "₱ 800", duration: "90 min"},
    {title: "Deep Cleansing Facial", price: "₱ 1,200", duration: "120 min"},
    {title: "Anti-Aging Facial", price: "₱ 1,500", duration: "90 min"},
    {title: "Acne Treatment Facial", price: "₱ 1,000", duration: "75 min"},
    {title: "Whitening Facial", price: "₱ 900", duration: "60 min"},
    
    // Eye Services
    {title: "Eyebrow Shaping", price: "₱ 150", duration: "20 min"},
    {title: "Eyebrow Threading", price: "₱ 200", duration: "25 min"},
    {title: "Eyelash Lift", price: "₱ 600", duration: "60 min"},
    {title: "Eyelash Tint", price: "₱ 400", duration: "30 min"},
    {title: "Eyelash Extension", price: "₱ 1,500", duration: "120 min"},
    {title: "Eyelash Perm", price: "₱ 500", duration: "45 min"},
    
    // Massage Services
    {title: "Back Massage (15 mins)", price: "₱ 300", duration: "15 min"},
    {title: "Back Massage (30 mins)", price: "₱ 500", duration: "30 min"},
    {title: "Full Body Massage (60 mins)", price: "₱ 800", duration: "60 min"},
    {title: "Foot Massage", price: "₱ 400", duration: "45 min"},
    {title: "Head & Shoulder Massage", price: "₱ 350", duration: "30 min"},
    
    // Waxing Services
    {title: "Underarm Waxing", price: "₱ 300", duration: "20 min"},
    {title: "Leg Waxing", price: "₱ 600", duration: "45 min"},
    {title: "Bikini Waxing", price: "₱ 500", duration: "30 min"},
    {title: "Full Body Waxing", price: "₱ 2,000", duration: "120 min"},
    
    // Additional Services
    {title: "Hair Treatment + Scalp Massage", price: "₱ 750", duration: "90 min"},
    {title: "Haircut + Color", price: "₱ 1,500", duration: "150 min"},
    {title: "Bridal Package Consultation", price: "₱ 500", duration: "60 min"},
    {title: "Makeup Application", price: "₱ 1,200", duration: "90 min"},
    {title: "Hair & Makeup Package", price: "₱ 2,000", duration: "180 min"}
  ]
  
  return (
    <motion.div
      className="min-h-screen w-full flex flex-col bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
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
          <Hero />
        </div>
        
        <motion.div
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          <Section2 />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          <SalonPackages />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          <ServicesList
            servicesItems={servicesItems}
          />
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
    </motion.div>
  );
}