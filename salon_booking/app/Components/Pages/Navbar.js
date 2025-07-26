"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { MenuItem, Menu } from "@mui/material";
import Image from 'next/image';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null); 
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

//   const handleMenuItemClick = () => {
//     // setLoading(true);
//     // handleClose();
//   };

  return (
    <nav className='h-[66px] w-[full] bg-[#F3C90D] flex items-center relative'>
        {/* LOGO */}
        <div className='w-fit h-fit absolute left-[12%]'>
            <Image
                src={"/images/logo/navbar-logo.png"}
                width={500}
                height={500}
                className='w-fit h-fit'
                alt='navbar logo'
            />
        </div>
        {/* MENU */}
        <div className='w-full flex flex-row justify-center items-center gap-20 text-[16px] text-black font-iRegular'>
            <Link
                href={"/"}
                className='cursor-pointer'
            >
                Home
            </Link>
            <Link
                href={"/"}
                className='cursor-pointer'
            >
                About Us
            </Link>
            <button
                type='button'
                onClick={(e) => setAnchorEl(e.currentTarget)}
                className='text-[var(--text-white)] cursor-pointer'
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
                <Link href="/services#offers" className='cursor-pointer'>
                    <MenuItem>
                        Offers
                    </MenuItem>
                </Link>
                <Link href="/services#packages" className='cursor-pointer'>
                    <MenuItem>
                        Packages
                    </MenuItem>
                </Link>
                <Link href="/services#pricing" className='cursor-pointer'>
                    <MenuItem>
                        Pricing
                    </MenuItem>
                </Link>
            </Menu>

            <button
                type='button'
                onClick={(e) => setAnchorEl2(e.currentTarget)}
                className='text-[var(--text-white)] cursor-pointer'
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
                <Link href="/booking/booking-form" className='cursor-pointer'>
                    <MenuItem>
                        Booking Form
                    </MenuItem>
                </Link>
                <Link href="/booking/find-booking" className='cursor-pointer'>
                    <MenuItem>
                        Find Booking
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    </nav>
  )
}

export default Navbar