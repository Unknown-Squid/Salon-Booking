"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { MenuItem, Menu } from "@mui/material";


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleMenuItemClick = () => {
    setLoading(true);
    handleClose();
  };


  return (
    <nav className='h-[66px] w-[full] bg-[#F3C90D] flex items-center relative'>
        {/* LOGO */}
        <div className='bg-black w-[200px] h-[90%] absolute left-[10%]'></div>
        {/* MENU */}
        <div className='w-full flex flex-row justify-center items-center gap-20 text-[12px] text-black font-iRegular'>
            <Link
                href={"/"}
            >
                Home
            </Link>
            <Link
                href={"/"}
            >
                About Us
            </Link>
            <button
                type='button'
                onClick={(e) => setAnchorEl(e.currentTarget)}
                className='text-[var(--text-white)]'
            >
                Services
                {open ? <ArrowDropUp /> : <ArrowDropDown />}
            </button>
            <Menu
                id="services-sub-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                <Link href="/services#offers">
                    <MenuItem onClick={handleMenuItemClick}>
                        Offers
                    </MenuItem>
                </Link>
                <Link href="/services#packages">
                    <MenuItem onClick={handleMenuItemClick}>
                        Packages
                    </MenuItem>
                </Link>
                <Link href="/services#pricing">
                    <MenuItem onClick={handleMenuItemClick}>
                        Pricing
                    </MenuItem>
                </Link>
            </Menu>

            <button
                type='button'
                onClick={(e) => setAnchorEl(e.currentTarget)}
                className='text-[var(--text-white)]'
            >
                Booking
                {open2 ? <ArrowDropUp /> : <ArrowDropDown />}
            </button>
            <Menu
                id="services-sub-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={() => setAnchorEl2(null)}
            >
                <Link href="/booking/booking-form">
                    <MenuItem onClick={handleMenuItemClick}>
                        Booking Form
                    </MenuItem>
                </Link>
                <Link href="/booking/find-booking">
                    <MenuItem onClick={handleMenuItemClick}>
                        Find Booking
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    </nav>
  )
}

export default Navbar
