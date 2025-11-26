"use client";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Pages/Navbar";
import Hero from "./Components/Pages/Hero";
import Section1 from "./Components/Pages/Section1";
import Section2 from "./Components/Pages/Section2";
import Section3 from "./Components/Pages/Section3";
import Footer from "./Components/Pages/Footer";

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

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
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

export default function Home() {
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
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 border-4 border-[#F3C90D] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-16 h-16 border-4 border-[#FF00C3] border-r-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        }>
          <div className="relative">
            <Hero />
          </div>
          
          <div className="relative">
            <Section1 />
          </div>
          
          <div className="relative">
            <Section2 />
          </div>
          
          <div className="relative">
            <Section3 />
          </div>
        </Suspense>
      </main>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20"
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
}