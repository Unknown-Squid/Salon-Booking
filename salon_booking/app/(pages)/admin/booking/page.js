"use client"
import AdminViewContent from '@/app/Components/Pages/AdminViewContent';
import Footer from '@/app/Components/Pages/Footer';
import Navbar from '@/app/Components/Pages/Navbar';
import React, { useEffect, useState } from 'react'

export default function AdminBookingView() {


    return (
        <div className="h-screen w-screen flex flex-col bg-white">
            <main className="h-full w-full overflow-x-hidden overflow-y-auto">
                <Navbar/>
                <AdminViewContent/>
                <Footer/>
            </main>
        </div>
    );
  }
  
